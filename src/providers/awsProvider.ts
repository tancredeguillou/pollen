/**
 * This code handles the AWS provider.
 * 
 * Author: Tancrede Guillou
 * Last modified 22/09/2024
 */

import {
    S3Client,
    CreateBucketCommand,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
    DeleteBucketCommand,
    paginateListObjectsV2,
    ListBucketsCommand
} from "@aws-sdk/client-s3";

import { DistributedProvider } from './provider.js'

export class AWSProvider extends DistributedProvider {

    client: S3Client;

    constructor() {
        super();
        this.client = new S3Client();
    }

    /************************ BUCKET RELATED FUNCTIONS ************************/
    async createBucket(
        bucketName: string | undefined
    ): Promise<void> {
        await this.client.send(
            new CreateBucketCommand({
                Bucket: bucketName,
            })
        );
    }

    async deleteBucket(
        bucketName: string
    ): Promise<void> {
        const paginator = paginateListObjectsV2(
            { client: this.client },
            { Bucket: bucketName }
        );
        for await (const page of paginator) {
            const objects = page.Contents;
            if (objects) {
                // For every object in each page, delete it.
                for (const object of objects) {
                    await this.client.send(
                        new DeleteObjectCommand({ Bucket: bucketName, Key: object.Key })
                    );
                }
            }
        }

        // Once all the objects are gone, the bucket can be deleted.
        await this.client.send(new DeleteBucketCommand({ Bucket: bucketName }));

    }

    async listBuckets(): Promise<void> {
        var log = 'AWS Buckets:\n';
        const response = await this.client.send(
            new ListBucketsCommand()
        );
        if (response.Buckets) {
            response.Buckets.forEach(bucket => {
                if (bucket.Name) log = log.concat('\t', bucket.Name, '\n');
            })
        }
        console.log(log)
        this.client.destroy()
    }

    /************************ OBJECT RELATED FUNCTIONS ************************/
    async putObject(
        bucketName: string,
        objectKey: string,
        objectBody: string
    ): Promise<void> {
        await this.client.send(
            new PutObjectCommand({
                Bucket: bucketName,
                Key: objectKey,
                Body: objectBody,
            })
        );
    }

    // This function might come in handy later but is currently not necessary.
    // async putFile(bucketName: string, filePath: string, objectKey?: string): Promise<void> {
    //     if (!objectKey) objectKey = path.basename(filePath)
    //     const fileStream = fs.createReadStream(filePath);
    //     const { size } = fs.statSync(filePath)
    //     await this.client.send(
    //         new PutObjectCommand({
    //             Bucket: bucketName,
    //             Key: objectKey,
    //             Body: fileStream,
    //             ContentLength: size
    //         })
    //     );
    // }

    async getObject(
        bucketName: string,
        objectKey: string
    ): Promise<string> {
        const { Body } = await this.client.send(
            new GetObjectCommand({
                Bucket: bucketName,
                Key: objectKey,
            })
        );

        if (Body) {
            const awsStringBody = await Body.transformToString();
            console.log('AWS body: ', awsStringBody);
            return awsStringBody;
        } else {
            throw new Error('Could not read object body.')
        }
    }

    async deleteObject(
        bucketName: string,
        objectKey: string
    ): Promise<void> {
        await this.client.send(
            new DeleteObjectCommand({ Bucket: bucketName, Key: objectKey })
        )
        this.client.destroy
    }

    async listObjects(
        bucketName: string
    ): Promise<void> {
        const paginator = paginateListObjectsV2(
            { client: this.client },
            { Bucket: bucketName }
        );
        var log = `${bucketName} objects in AWS:\n`;
        for await (const page of paginator) {
            const objects = page.Contents;
            if (objects) {
                // For every object in each page, delete it.
                for (const object of objects) {
                    if (object.Key) log = log.concat('\t', object.Key, '\n');
                }
            }
        }
        console.log(log);
    }
}
