/**
 * This code handles Azure the provider.
 * 
 * Author: Tancrede Guillou
 * Last modified 22/09/2024
 */

import { BlobServiceClient } from "@azure/storage-blob";
import { DefaultAzureCredential } from "@azure/identity"
import { AbortController } from "@azure/abort-controller";

import { DistributedProvider } from './provider.js'

// Convert stream to text
async function streamToText(readable: NodeJS.ReadableStream): Promise<string> {

    readable.setEncoding('utf8');
    let data = '';
    for await (const chunk of readable) {
        data += chunk;
    }
    return data;

}

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
        this.client = new BlobServiceClient(
            `https://${accountName}.blob.core.windows.net`,
            new DefaultAzureCredential(),
            {
                keepAliveOptions: {
                    enable: false
                },
                retryOptions: {
                    maxTries: 1
                }

            }
        );
    }

    /************************ BUCKET RELATED FUNCTIONS ************************/
    async createBucket(
        containerName: string
    ) {
        // Get a reference to a bucket ( = container)
        const containerClient = this.client.getContainerClient(containerName);
        // Create the container
        const createContainerResponse = await containerClient.create();
        // Optional: response
        // console.log(
        //     `Container was created successfully.\n\t
        //     requestId:${createContainerResponse.requestId}\n\t
        //     URL: ${containerClient.url}`
        // );
    }

    async deleteBucket(
        bucketName: string
    ) {
        const containerClient = this.client.getContainerClient(bucketName);
        const deleteContainerResponse = await containerClient.delete();
        // Optional: response
        // console.log(
        //     'Container was deleted successfully. requestId: ',
        //     deleteContainerResponse.requestId
        // );
    }

    async listBuckets(): Promise<void> {
        // create a controller and get its signal
        var controller = new AbortController();
        //controller.abort();
        console.log('Listing')
        var log = 'Azure Buckets:\n';
        for await (const containerItem of this.client.listContainers({ abortSignal: controller.signal })) {
            // ContainerItem
            log = log.concat('\t', containerItem.name, '\n');
        }
        console.log(log);

        controller.abort();
        (this.client as any) = null;
        (controller as any) = null;
    }

    /************************ OBJECT RELATED FUNCTIONS ************************/
    async putObject(
        bucketName: string,
        objectKey: string,
        objectBody: string
    ): Promise<void> {
        const blockBlobClient = this.client
            .getContainerClient(bucketName)
            .getBlockBlobClient(objectKey);
        // Optional: Display blob name and url
        // console.log(
        //     `\nUploading to Azure storage as blob\n\t
        //     name: ${objectKey}:\n\tURL: ${blockBlobClient.url}`
        // );

        // Upload data to the object ( = blob)
        const uploadBlobResponse = await blockBlobClient.upload(objectBody, objectBody.length);
        // Optional: response
        // console.log(
        //     `Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`
        // );
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

    // async getObject(
    //     bucketName: string,
    //     objectKey: string
    // ): Promise<string> {
    //     const blobClient = this.client
    //         .getContainerClient(bucketName)
    //         .getBlobClient(objectKey);

    //     const downloadResponse: BlobDownloadResponseParsed =
    //         await blobClient.download();

    //     if (!downloadResponse.errorCode && downloadResponse.readableStreamBody) {
    //         const downloaded = await this.streamToBuffer(
    //             downloadResponse.readableStreamBody
    //         );
    //         if (downloaded) {
    //             const azureBody = downloaded.toString();
    //             console.log('Azure body:', azureBody);
    //             return azureBody;
    //         } else {
    //             throw new Error("Could not read object body.")
    //         }
    //     } else {
    //         throw new Error("Could not read object body.")
    //     }
    // }

    // async streamToBuffer(readableStream: NodeJS.ReadableStream) {
    //     return new Promise((resolve, reject) => {
    //         const chunks: Buffer[] = [];

    //         readableStream.on('data', (data) => {
    //             const content: Buffer = data instanceof Buffer ? data : Buffer.from(data);
    //             chunks.push(content);
    //         });
    //         readableStream.on('end', () => {
    //             resolve(Buffer.concat(chunks));
    //         });
    //         readableStream.on('error', reject);
    //     });
    // }

    async getObject(
        bucketName: string,
        objectKey: string
    ): Promise<string> {
        for (let attempt = 1; attempt <= 5; attempt++) {
            try {
                const blobClient = this.client
                    .getContainerClient(bucketName)
                    .getBlobClient(objectKey);
                //const downloadBlockBlobResponse = await blockBlobClient.download();
                //const blobStreamBody = downloadBlockBlobResponse.readableStreamBody

                // Download and convert a blob to a string
                const downloadBlockBlobResponse = await blobClient.download();
                if (downloadBlockBlobResponse.readableStreamBody) {
                    const downloaded = await streamToBuffer(downloadBlockBlobResponse.readableStreamBody);
                    console.log("Downloaded blob content:", downloaded.toString());
                    process.on('unhandledRejection', (reason, promise) => {
                        console.log('Unhandled Rejection at 1:', promise, 'reason:', reason);
                    });

                    return downloaded.toString()
                }


                // if (blobStreamBody) {
                //     try {
                //         const azureStringBody = await streamToText(blobStreamBody)
                //         console.log('Azure body: ', azureStringBody);
                //         blobStreamBody.removeAllListeners()
                //         blobStreamBody.off
                //         return azureStringBody
                //     } catch (error: any) {
                //         console.log(`Error reading stream: ${error.message}`);
                //         throw error; // re-throw the error to be caught by the outer catch block
                //     }
                //     // const azureStringBody = await streamToText(downloadBlockBlobResponse)
                //     // console.log('Azure body: ', azureStringBody);
                //     // return azureStringBody
                // } else {
                //     return "No Response"
                // }
            } catch (error: any) {
                console.log(`Attempt ${attempt} failed: ${error.message}`);
                if (attempt === 5) {
                    throw new Error(`Failed after ${5} attempts: ${error.message}`);
                }
                // Optionally, add a delay before retrying (e.g., 1000 ms delay)
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        return ""
        // try {
        //         const blockBlobClient = this.client
        //             .getContainerClient(bucketName)
        //             .getBlockBlobClient(objectKey);
        //         const downloadBlockBlobResponse = (await blockBlobClient.download(0)).readableStreamBody;

        //         if (downloadBlockBlobResponse) {
        //             const azureStringBody = await streamToText(downloadBlockBlobResponse)
        //             console.log('Azure body: ', azureStringBody);
        //             return azureStringBody
        //         } else {
        //             throw new Error('Could not read object body.')
        //         }
        //     } catch (err: any) {
        //         console.error(`Error: ${err.message}`);
        //         return err.message
        //     }
    }

    async deleteObject(
        bucketName: string,
        objectKey: string
    ) {
        const blockBlobClient = this.client
            .getContainerClient(bucketName)
            .getBlockBlobClient(objectKey);
        const deleteBlockBlobResponse = await blockBlobClient.delete();
        // Optional: response
        // console.log(
        //     'Block blob was deleted successfully. requestId: ',
        //     deleteBlockBlobResponse.requestId
        // );
    }

}