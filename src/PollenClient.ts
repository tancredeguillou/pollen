/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
    CreateBucketCommandInput,
    CreateBucketCommandOutput
} from "./commands/CreateBucketCommand";
import {
    ListBucketsCommandInput,
    ListBucketsCommandOutput
} from "./commands/ListBucketsCommand";
import {
    PutObjectCommandInput,
    PutObjectCommandOutput
} from "./commands/PutObjectCommand";
import {
    DeleteBucketCommandInput,
    DeleteBucketCommandOutput
} from "./commands/DeleteBucketCommand";

import { Command } from "./command";

import { AWSProvider } from './providers/awsProvider.js';
import { GCSProvider } from './providers/gcsProvider.js';
import { AzureProvider } from './providers/azureProvider.js';
import { allProviders } from "./providers/provider.js";

export type ProviderType = AWSProvider | GCSProvider | AzureProvider

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

/**
 * @public
 */
export type ServiceInputTypes =
    | CreateBucketCommandInput
    | ListBucketsCommandInput
    | DeleteBucketCommandInput
    | PutObjectCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
    | CreateBucketCommandOutput
    | ListBucketsCommandOutput
    | DeleteBucketCommandOutput
    | PutObjectCommandOutput;

/**
 * <p></p>
 * @public
 */
export class PollenClient<
    ServiceInputTypes extends object,
    ServiceOutputTypes extends __MetadataBearer
> {

    providers: ProviderType[];

    constructor(providerNames: string[] = allProviders) {
        this.providers = ProviderFactory.createProvidersList(providerNames);
    }

    send<InputType extends ServiceInputTypes, OutputType extends ServiceOutputTypes>(
        command: Command<InputType, OutputType, ServiceInputTypes, ServiceOutputTypes>
    ): Promise<OutputType> | void {
        /**
         * TODO
         * Here we'll have a lot of handling taking place. cf https://github.com/smithy-lang/smithy-typescript/blob/main/packages/smithy-client/src/client.ts
         * For now let's just call command.resolve function.
         */
        command.resolve(this.providers)
    }

}