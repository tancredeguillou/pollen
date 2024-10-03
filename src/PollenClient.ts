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
import {
    DeleteObjectCommandOutput,
    DeleteObjectCommandInput,
} from "./commands/DeleteObjectCommand";
import {
    GetObjectCommandInput,
    GetObjectCommandOutput
} from "./commands/GetObjectCommand";
import {
    ListObjectsCommandInput,
    ListObjectsCommandOutput
} from "./commands/ListObjectsCommand";
import {
    CopyObjectCommandInput,
    CopyObjectCommandOutput
} from "./commands/CopyObjectCommand";

import { Command } from "./command";

import { AWSProvider, AWSProviderConfig } from './providers/awsProvider';
import { GCSProvider, GCSProviderConfig } from './providers/gcsProvider';
import { AzureProvider, AzureProviderConfig } from './providers/azureProvider';
import { allProviders } from "./providers/provider";

export type ProviderType = AWSProvider | GCSProvider | AzureProvider

class ProviderFactory {
    config: PollenClientConfig;

    constructor(config: PollenClientConfig) {
        config.providerNames = config.providerNames || allProviders;
        this.config = config;
    }

    // Define a method that creates an array of provider instances based on an array of provider names.
    createProvidersList(): ProviderType[] {
        if (!this.config.providerNames) throw new Error('No providers where given.');
        return this.config.providerNames.map(providerName => {
            switch (providerName) {
                case "aws":
                    if (!this.config.awsConfig) throw new Error('AWS config not found 3.');
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

/**
 * @public
 */
export type ServiceInputTypes =
    | CreateBucketCommandInput
    | ListBucketsCommandInput
    | DeleteBucketCommandInput
    | PutObjectCommandInput
    | DeleteObjectCommandInput
    | GetObjectCommandInput
    | ListObjectsCommandInput
    | CopyObjectCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
    | CreateBucketCommandOutput
    | ListBucketsCommandOutput
    | DeleteBucketCommandOutput
    | PutObjectCommandOutput
    | DeleteObjectCommandOutput
    | GetObjectCommandOutput
    | ListObjectsCommandOutput
    | CopyObjectCommandOutput;

/**
 * @public
 */
export interface PollenClientConfig {
    providerNames?: string[];
    awsConfig: AWSProviderConfig;
    azureConfig: AzureProviderConfig;
    gcsConfig: GCSProviderConfig;
}

/**
 * <p></p>
 * @public
 */
export class PollenClient<
    ServiceInputTypes extends object,
    ServiceOutputTypes extends __MetadataBearer
> {

    providers: ProviderType[];

    constructor(config: PollenClientConfig) {
        if (!config.awsConfig) throw new Error('AWS config not found.');
        this.providers = new ProviderFactory(config).createProvidersList();
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