/**
 * This code handles the Google Cloud Storage (GCS) provider.
 * 
 * Author: Tancrede Guillou
 * Last modified 22/09/2024
 */

import { Storage } from '@google-cloud/storage'

import { DistributedProvider } from './provider.js'

export class GCSProvider extends DistributedProvider {

    client: Storage;

    constructor() {
        super();
        const projectId = process.env.GCLOUD_STORAGE_PROJECT_ID;
        if (!projectId) throw new Error('GCloud Storage project ID not found.');
        this.client = new Storage({
            projectId: projectId
        });
    }

    /************************ BUCKET RELATED FUNCTIONS ************************/
    async createBucket(
        bucketName: string
    ) {
        await this.client.createBucket(bucketName)
    }

    async deleteBucket(
        bucketName: string
    ) {
        const bucket = this.client.bucket(bucketName);
        const [files] = await bucket.getFiles();
        await Promise.all(files.map(file => file.delete()));
        await bucket.delete();
    }

    async listBuckets(): Promise<void> {
        const [buckets] = await this.client.getBuckets();

        var log = 'GCS Bucket:\n';
        buckets.forEach(bucket => {
            log = log.concat('\t', bucket.name, '\n');
        });
        console.log(log);
    }

    /************************ BUCKET RELATED FUNCTIONS ************************/
    async putObject(
        bucketName: string,
        objectKey: string,
        objectBody: string
    ): Promise<void> {
        await this.client
            .bucket(bucketName)
            .file(objectKey)
            .save(objectBody)
    }

    // This function might come in handy later but is currently not necessary.
    // async putFile(bucketName: string, filePath: string, objectKey?: string): Promise<void> {
    //     if (!objectKey) objectKey = path.basename(filePath);
    //     const options = {
    //         destination: objectKey,
    //     };
    //     await this.client.bucket(bucketName).upload(filePath, options)
    // }

    async getObject(
        bucketName: string,
        objectKey: string
    ) {
        const [Body] = await this.client
            .bucket(bucketName)
            .file(objectKey)
            .download();

        if (Body) {
            const gcsStringBody = Body.toString();
            console.log('GCS body: ', gcsStringBody);
            return gcsStringBody;
        } else {
            throw new Error('Could not read object body.');
        }
    }

    async deleteObject(
        bucketName: string,
        objectKey: string
    ) {
        await this.client.bucket(bucketName).file(objectKey).delete();
    }

}
