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

type ProviderClient = BlobServiceClient | S3Client | Storage;

export const allProviders = ["aws", "azure", "gcs"]

abstract class ProviderInterface {
    // Bucket related functions
    abstract createBucket(bucketName: string): Promise<void>
    abstract deleteBucket(bucketName: string): Promise<void>
    abstract listBuckets(): Promise<void>

    // Object related functions
    abstract putObject(bucketName: string, objectKey: string, objectBody: string): Promise<void>
    abstract getObject(bucketName: string, objectKey: string): Promise<string>
    abstract deleteObject(bucketName: string, objectKey: string): Promise<void>
    abstract listObjects(bucketName: string): Promise<void>
}

export abstract class DistributedProvider extends ProviderInterface {
    abstract client: ProviderClient
}

export abstract class MainProvider extends ProviderInterface {
    abstract putFile(bucketName: string, filePath: string, objectKey?: string): Promise<void>
}