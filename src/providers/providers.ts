/**
 * Author: Tancrede Guillou
 */

import { AWSProvider } from "./awsProvider";
import { GCSProvider } from "./gcsProvider";
import { AzureProvider } from "./azureProvider";

import { PollenClientConfig } from "../PollenClient";

export const allProviders = ["aws", "azure", "gcs"]

export class ProviderFactory {
    config: PollenClientConfig;

    constructor(config: PollenClientConfig) {
        config.providerNames = config.providerNames || allProviders;
        this.config = config;
    }

    // Define a method that creates an array of provider instances based on an array of provider names.
    createProvidersList(): ProviderType[] {
        if (!this.config.providerNames) throw new Error('No providers where given.');
        if (!(this.config.providerNames.includes('aws'))) throw new Error(`aws must be included in the provider list but got ${this.config.providerNames}.`);
        return this.config.providerNames.map(providerName => {
            switch (providerName) {
                case "aws":
                    return new AWSProvider(this.config.awsConfig);
                case "azure":
                    return new AzureProvider(this.config.azureConfig);
                case "gcs":
                    return new GCSProvider(this.config.gcsConfig);
                default:
                    throw new Error(`Unknown provider: ${providerName}`);
            }
        });
    }
}

export type ProviderType = AWSProvider | GCSProvider | AzureProvider

export class Providers {
    list: ProviderType[];

    constructor(config: PollenClientConfig) {
        this.list = new ProviderFactory(config).createProvidersList();
    }

    getAwsProvider(): AWSProvider {
        return this.list.find(provider => provider instanceof AWSProvider) as AWSProvider;
    }
}