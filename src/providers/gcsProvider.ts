/**
 * This code handles the Google Cloud Storage (GCS) provider.
 * 
 * Author: Tancrede Guillou
 * Last modified 22/09/2024
 */

import { Storage } from '@google-cloud/storage'

import { DistributedProvider } from './provider.js'
import { StreamingBlobPayloadInputTypes } from '@smithy/types';

// type SaveData = string | Uint8Array | Buffer | internal.PipelineSource<string | Uint8Array | Buffer>
// type StreamingBlobPayloadInputTypes = string | Uint8Array | Buffer | internal.Readable | ReadableStream<any> | Blob

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
        bucketName: string | undefined
    ) {
        if (!bucketName) throw new Error('Bucket name not found.');
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
        bucketName: string | undefined,
        objectKey: string | undefined,
        objectBody: StreamingBlobPayloadInputTypes | undefined
    ): Promise<void> {
        if (!bucketName || !objectKey || !objectBody) throw new Error('Bucket name, object key or object body not found.');
        await this.client
            .bucket(bucketName)
            .file(objectKey)
            // TODO - toString is not the best way to handle this. We should find a better way to handle the objectBody.
            .save(objectBody.toString());
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
        bucketName: string | undefined,
        objectKey: string | undefined
    ) {
        if (!bucketName || !objectKey) throw new Error('Bucket name or object key not found.');
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
        bucketName: string | undefined,
        objectKey: string | undefined
    ) {
        if (!bucketName || !objectKey) throw new Error('Bucket name or object key not found.');
        await this.client.bucket(bucketName).file(objectKey).delete();
    }

    async listObjects(
        bucketName: string | undefined
    ): Promise<void> {
        if (!bucketName) throw new Error('Bucket name not found.');
        const [objects] = await this.client.bucket(bucketName).getFiles();
        var log = `${bucketName} objects in GCS:\n`;
        objects.forEach(object => {
            log = log.concat('\t', object.name, '\n');
        });
        console.log(log);
    }

}
