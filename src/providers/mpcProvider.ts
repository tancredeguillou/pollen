/**
 * This file defines the Multi Party Computation Provider class.
 * 
 * Author: Tancrede Guillou
 * Last modified: 22/09/2024
 */
import { promises as fs } from 'fs';
import * as path from 'path';

import { AWSProvider } from './awsProvider.js';
import { GCSProvider } from './gcsProvider.js';
import { AzureProvider } from './azureProvider.js';

import { allProviders } from "./provider.js";

import {
    mpcSplitData,
    mpcRecoverData
} from "../mpc/mpc.js"

type ProviderType = AWSProvider | GCSProvider | AzureProvider

class ProviderFactory {
    // Define a method that creates a provider instance based on a provider name.
    static createProvider(providerName: string): ProviderType {
        switch (providerName) {
            case "aws":
                return new AWSProvider();
            case "azure":
                return new AzureProvider();
            case "gcs":
                return new GCSProvider();
            default:
                throw new Error(`Unknown provider: ${providerName}`);
        }
    }

    // Define a method that creates an array of provider instances based on an array of provider names.
    static createProvidersList(providerNames: string[]): ProviderType[] {
        return providerNames.map(ProviderFactory.createProvider);
    }
}

export class MPCProvider {

    providers: ProviderType[];

    constructor(providerNames: string[] = allProviders) {
        this.providers = ProviderFactory.createProvidersList(providerNames);
    }

    async createBucket(bucketName: string): Promise<void> {
        const promiseList = this.providers.map(provider => provider.createBucket(bucketName))
        await Promise.all(promiseList)
    }

    async deleteBucket(bucketName: string): Promise<void> {
        const promiseList = this.providers.map(provider => provider.deleteBucket(bucketName))
        await Promise.all(promiseList)
    }

    async listBuckets(): Promise<void> {
        const promiseList = this.providers.map(provider => provider.listBuckets())
        await Promise.all(promiseList)
    }

    async putObject(bucketName: string, objectKey: string, objectBody: string): Promise<void> {
        const shares = mpcSplitData(objectBody)
        // Iterate over the dataList array and call putObject() for each data item
        const promiseList = shares.map((share, index) => {
            const provider = this.providers[index % this.providers.length];
            return provider.putObject(bucketName, objectKey, share);
        })
        await Promise.all(promiseList)
    }

    async putFile(bucketName: string, filePath: string, objectKey?: string): Promise<void> {
        if (!objectKey) objectKey = path.basename(filePath);
        const objectBody = (await fs.readFile(filePath)).toString();
        await this.putObject(bucketName, objectKey, objectBody);
    }

    async getObject(bucketName: string, objectKey: string): Promise<string> {
        const promiseList = this.providers.map(provider => provider.getObject(bucketName, objectKey))
        const shares = await Promise.all(promiseList)
        return mpcRecoverData(shares)
    }

    async deleteObject(bucketName: string, objectKey: string): Promise<void> {
        const promiseList = this.providers.map(provider => provider.deleteObject(bucketName, objectKey))
        await Promise.all(promiseList)
    }

    async listObjects(bucketName: string): Promise<void> {
        const promiseList = this.providers.map(provider => provider.listObjects(bucketName))
        await Promise.all(promiseList)
    }

}