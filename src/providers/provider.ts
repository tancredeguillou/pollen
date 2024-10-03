/**
 * This file defines the behaviour of the Provider class
 * 
 * Author: Tancrede Guillou
 * 
 * Last modified: 22/09/2024
 */

import { BlobServiceClient } from "@azure/storage-blob";
import { S3Client } from "@aws-sdk/client-s3";
import { Storage } from "@google-cloud/storage";
import { StreamingBlobPayloadInputTypes } from "@smithy/types";

// Importing Command Inputs. Should the functions return Command outputs? TODO
import { ListBucketsCommandInput } from "../commands/ListBucketsCommand";
import { CreateBucketCommandInput } from "../commands/CreateBucketCommand";
import { PutObjectCommandInput } from "../commands/PutObjectCommand";
import { DeleteBucketCommandInput } from "../commands/DeleteBucketCommand";
import { DeleteObjectCommandInput } from "../commands/DeleteObjectCommand";
import { GetObjectCommandInput } from "../commands/GetObjectCommand";
import { ListObjectsCommandInput } from "../commands/ListObjectsCommand";
import { CopyObjectCommandInput } from "../commands/CopyObjectCommand";

type ProviderClient = BlobServiceClient | S3Client | Storage;

export const allProviders = ["aws", "azure", "gcs"]

abstract class ProviderInterface {
    // Bucket related functions
    abstract createBucket(bucketName: string | undefined): Promise<void>
    abstract deleteBucket(bucketName: string | undefined): Promise<void>
    abstract listBuckets(): Promise<void>

    // Object related functions
    abstract putObject(bucketName: string | undefined, objectKey: string | undefined, objectBody: StreamingBlobPayloadInputTypes | undefined): Promise<void>
    abstract getObject(bucketName: string | undefined, objectKey: string | undefined): Promise<string>
    abstract deleteObject(bucketName: string | undefined, objectKey: string | undefined): Promise<void>
    abstract listObjects(bucketName: string | undefined): Promise<void>
    abstract copyObject(input: CopyObjectCommandInput): Promise<void>
}

export abstract class DistributedProvider extends ProviderInterface {
    abstract client: ProviderClient
}

export abstract class MainProvider extends ProviderInterface {
    abstract putFile(bucketName: string | undefined, filePath: string | undefined, objectKey?: string | undefined): Promise<void>
}