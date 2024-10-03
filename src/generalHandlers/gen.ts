/**
 * This code handles the main MPC calls.
 * 
 * Author: Tancrede Guillou
 * Last modified 20/09/2024
 */

// This is used for getting user input.
import * as readline from 'readline';

import * as dotenv from "dotenv";
dotenv.config();

import { getUserInput } from '../util/io.js'

import { allProviders } from '../providers/providers.js'
import { PollenClient, PollenClientConfig } from '../PollenClient.js';
import { CreateBucketCommand } from '../commands/CreateBucketCommand.js';
import { ListBucketsCommand } from '../commands/ListBucketsCommand.js';
import { PutObjectCommand } from '../commands/PutObjectCommand.js';
import { GetObjectCommand } from '../commands/GetObjectCommand.js';
import { ListObjectsCommand } from '../commands/ListObjectsCommand.js';
import { DeleteBucketCommand } from '../commands/DeleteBucketCommand.js';

const pollenClientConfig: PollenClientConfig = {
    awsConfig: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN
    },
    azureConfig: {
        connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING
    },
    gcsConfig: {
        projectId: process.env.GCS_PROJECT_ID
    }
};

/************************ BUCKET RELATED FUNCTIONS ************************/
export async function createBucket(providers: string[] = allProviders): Promise<void> {
    const bucketName: string | null = await getUserInput("Please enter the new bucket name: ");
    if (!bucketName) {
        throw new Error("A bucket name is required.");
    }

    pollenClientConfig.providerNames = providers;

    const pollenClient = new PollenClient(pollenClientConfig)
    await pollenClient.send(
        new CreateBucketCommand({
            Bucket: bucketName,
        })
    );
}

export async function deleteBucket(providers: string[] = allProviders) {
    const bucketName: string | null = await getUserInput("Please enter the bucket name: ");
    if (!bucketName) {
        throw new Error("A bucket name is required.");
    }

    //Confirm resource deletion.
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const result = await new Promise<string>(
        resolve => rl.question("Are you sure you want to empty and delete this bucket? (y/n) ", resolve));
    rl.close();

    if (result === "y") {
        pollenClientConfig.providerNames = providers;
        const pollenClient = new PollenClient(pollenClientConfig)
        await pollenClient.send(
            new DeleteBucketCommand({
                Bucket: bucketName,
            })
        );
    }
}

export async function listBuckets(providers: string[] = allProviders) {
    pollenClientConfig.providerNames = providers;
    const pollenClient = new PollenClient(pollenClientConfig)
    await pollenClient.send(
        new ListBucketsCommand()
    )
}

/************************ OBJECT RELATED FUNCTIONS ************************/
export async function putObject(providers: string[] = allProviders): Promise<void> {
    try {
        const bucketName: string | null = await getUserInput("Please enter the bucket name: ");
        if (!bucketName) {
            throw new Error("A bucket name is required.");
        }
        const objectKey: string | null = await getUserInput("Please enter the key for your new object: ");
        if (!objectKey) {
            throw new Error("An object key is required.");
        }
        const objectBody: string | null = await getUserInput("Please enter the new object's body: ");
        if (!objectBody) {
            throw new Error("An object body is required.");
        }

        pollenClientConfig.providerNames = providers;
        const pollenClient = new PollenClient(pollenClientConfig);
        await pollenClient.send(
            new PutObjectCommand({
                Bucket: bucketName,
                Key: objectKey,
                Body: objectBody,
            })
        );
    } catch (err: any) {
        console.error(`Error: ${err.message}`);
    }
}

// export async function putFile(providers: string[] = allProviders): Promise<void> {
//     const bucketName: string | null = await getUserInput("Please enter the bucket name: ");
//     if (!bucketName) {
//         throw new Error("A bucket name is required.");
//     }
//     const filePath: string | null = await getUserInput("Please enter the file path: ");
//     if (!filePath) {
//         throw new Error("A file path is required.");
//     }

//     const mpcProvider = new MPCProvider(providers);
//     await mpcProvider.putFile(bucketName, filePath)
// }

export async function getObject(providers: string[] = allProviders) {
    const bucketName: string | null = await getUserInput("Please enter the bucket name: ");
    if (!bucketName) {
        throw new Error("A bucket name is required.");
    }
    const objectKey: string | null = await getUserInput("Please enter the key for your object: ");
    if (!objectKey) {
        throw new Error("An object key is required.");
    }

    pollenClientConfig.providerNames = providers;
    const pollenClient = new PollenClient(pollenClientConfig);
    await pollenClient.send(new GetObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
    }));
}

export async function deleteObject(providers: string[] = allProviders) {
    const bucketName: string | null = await getUserInput("Please enter the bucket name: ");
    if (!bucketName) {
        throw new Error("A bucket name is required.");
    }
    const objectKey: string | null = await getUserInput("Please enter the key of the object you wish to delete: ");
    if (!objectKey) {
        throw new Error("An object key is required.");
    }

    //Confirm resource deletion.
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const result = await new Promise<string>(
        resolve => rl.question("Are you sure you want to empty and delete this bucket? (y/n) ", resolve));
    rl.close();

    if (result === "y") {
        pollenClientConfig.providerNames = providers;
        const pollenClient = new PollenClient(pollenClientConfig);
        await pollenClient.send(
            new PutObjectCommand({
                Bucket: bucketName,
                Key: objectKey,
            })
        );
    }
}

export async function listObjects(providers: string[] = allProviders) {
    const bucketName: string | null = await getUserInput("Please enter the bucket name: ");
    if (!bucketName) {
        throw new Error("A bucket name is required.");
    }

    pollenClientConfig.providerNames = providers;
    const pollenClient = new PollenClient(pollenClientConfig);
    await pollenClient.send(
        new ListObjectsCommand({
            Bucket: bucketName,
        })
    );
}