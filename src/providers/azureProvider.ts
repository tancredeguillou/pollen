/**
 * This code handles Azure the provider.
 * 
 * Author: Tancrede Guillou
 * Last modified 22/09/2024
 */

import { BlobServiceClient } from "@azure/storage-blob";
import { DefaultAzureCredential } from "@azure/identity"

import { DistributedProvider } from './provider.js'
import { StreamingBlobPayloadInputTypes } from "@smithy/types";

async function streamToBuffer(readableStream: NodeJS.ReadableStream): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = [];
        readableStream.on("data", (data: any) => {
            chunks.push(data instanceof Buffer ? data : Buffer.from(data));
        });
        readableStream.on("end", () => {
            resolve(Buffer.concat(chunks));
        });
        readableStream.on("error", reject);
    });
}

export class AzureProvider extends DistributedProvider {

    client: BlobServiceClient;

    constructor() {
        super();
        const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
        if (!accountName) throw new Error('Azure Storage account name not found.');
        const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
        if (!AZURE_STORAGE_CONNECTION_STRING) throw Error('Azure Storage Connection string not found');

        // USING CONNECTION STRING - NO NEED TO LOGIN BUT LESS SECURE
        this.client = BlobServiceClient.fromConnectionString(
            AZURE_STORAGE_CONNECTION_STRING
        );
        // USING DEFAULT AZUR CREDENTIALS - MORE SECURE BUT NEEDS LOGIN
        // this.client = new BlobServiceClient(
        //     `https://${accountName}.blob.core.windows.net`,
        //     new DefaultAzureCredential(),
        // );
    }

    /************************ BUCKET RELATED FUNCTIONS ************************/
    async createBucket(
        containerName: string | undefined
    ) {
        if (!containerName) throw new Error('Bucket name not found.');
        const containerClient = this.client.getContainerClient(containerName);
        await containerClient.create();
    }

    async deleteBucket(
        bucketName: string | undefined
    ) {
        if (!bucketName) throw new Error('Bucket name not found.');
        const containerClient = this.client.getContainerClient(bucketName);
        await containerClient.delete();
    }

    async listBuckets(): Promise<void> {
        var log = 'Azure Buckets:\n';
        for await (const containerItem of this.client.listContainers()) {
            // ContainerItem
            log = log.concat('\t', containerItem.name, '\n');
        }
        console.log(log);
    }

    /************************ OBJECT RELATED FUNCTIONS ************************/
    async putObject(
        bucketName: string | undefined,
        objectKey: string | undefined,
        objectBody: StreamingBlobPayloadInputTypes | undefined
    ): Promise<void> {
        if (!bucketName || !objectKey || !objectBody) throw new Error('Bucket name, object key or object body not found.');
        const blockBlobClient = this.client
            .getContainerClient(bucketName)
            .getBlockBlobClient(objectKey);
        // Upload data to the object ( = blob)
        await blockBlobClient.upload(objectBody, objectBody.toString().length);
    }

    // This function might come in handy later but is currently not necessary.
    // async putFile(bucketName: string, filePath: string, objectKey?: string): Promise<void> {
    //     if (!objectKey) objectKey = path.basename(filePath);
    //     const fileStream = fs.createReadStream(filePath);
    //     const { size } = fs.statSync(filePath)
    //     await this.client
    //         .getContainerClient(bucketName)
    //         .getBlockBlobClient(objectKey)
    //         .upload(fileStream, size)
    // }

    async getObject(
        bucketName: string | undefined,
        objectKey: string | undefined
    ): Promise<string> {
        if (!bucketName || !objectKey) throw new Error('Bucket name or object key not found.');
        const blobClient = this.client
            .getContainerClient(bucketName)
            .getBlobClient(objectKey);
        // Download and convert a blob to a string
        const downloadBlockBlobResponse = await blobClient.download();
        if (downloadBlockBlobResponse.readableStreamBody) {
            const downloaded = await streamToBuffer(downloadBlockBlobResponse.readableStreamBody);
            console.log('Azure body: ', downloaded.toString());
            return downloaded.toString()
        } else {
            throw new Error('Could not read object body.');
        }

    }

    async deleteObject(
        bucketName: string | undefined,
        objectKey: string | undefined
    ) {
        if (!bucketName || !objectKey) throw new Error('Bucket name or object key not found.');
        const blockBlobClient = this.client
            .getContainerClient(bucketName)
            .getBlockBlobClient(objectKey);
        await blockBlobClient.delete();
    }

    async listObjects(
        bucketName: string | undefined
    ): Promise<void> {
        if (!bucketName) throw new Error('Bucket name not found.');
        const blockBlobClient = this.client
            .getContainerClient(bucketName)
        var log = `${bucketName} objects in Azure:\n`;
        for await (const blob of blockBlobClient.listBlobsFlat()) {
            log = log.concat('\t', blob.name, '\n');
        }
        console.log(log);
    }

}