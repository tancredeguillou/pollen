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
import {
    GetObjectAclCommandInput,
    GetObjectAclCommandOutput
} from "./commands/GetObjectAclCommand";
import {
    GetObjectAttributesCommandInput,
    GetObjectAttributesCommandOutput
} from "./commands/GetObjectAttributesCommand";
import {
    GetObjectLegalHoldCommandInput,
    GetObjectLegalHoldCommandOutput
} from "./commands/GetObjectLegalHoldCommand";
import {
    GetObjectLockConfigurationCommandInput,
    GetObjectLockConfigurationCommandOutput
} from "./commands/GetObjectLockConfigurationCommand";
import {
    GetObjectRetentionCommandInput,
    GetObjectRetentionCommandOutput
} from "./commands/GetObjectRetentionCommand";
import {
    GetObjectTaggingCommandInput,
    GetObjectTaggingCommandOutput
} from "./commands/GetObjectTaggingCommand";
import {
    GetObjectTorrentCommandInput,
    GetObjectTorrentCommandOutput
} from "./commands/GetObjectTorrentCommand";
import {
    GetBucketAccelerateConfigurationCommandInput,
    GetBucketAccelerateConfigurationCommandOutput
} from "./commands/GetBucketAccelerateConfigurationCommand";
import {
    GetBucketAclCommandInput,
    GetBucketAclCommandOutput
} from "./commands/GetBucketAclCommand";
import {
    GetBucketAnalyticsConfigurationCommandInput,
    GetBucketAnalyticsConfigurationCommandOutput
} from "./commands/GetBucketAnalyticsConfigurationCommand";
import {
    GetBucketCorsCommandInput,
    GetBucketCorsCommandOutput
} from "./commands/GetBucketCorsCommand";
import {
    GetBucketEncryptionCommandInput,
    GetBucketEncryptionCommandOutput
} from "./commands/GetBucketEncryptionCommand";
import {
    GetBucketIntelligentTieringConfigurationCommandInput,
    GetBucketIntelligentTieringConfigurationCommandOutput
} from "./commands/GetBucketIntelligentTieringConfigurationCommand";
import {
    GetBucketInventoryConfigurationCommandInput,
    GetBucketInventoryConfigurationCommandOutput
} from "./commands/GetBucketInventoryConfigurationCommand";
import {
    GetBucketLifecycleConfigurationCommandInput,
    GetBucketLifecycleConfigurationCommandOutput
} from "./commands/GetBucketLifecycleConfigurationCommand";
import {
    GetBucketLocationCommandInput,
    GetBucketLocationCommandOutput
} from "./commands/GetBucketLocationCommand";
import {
    GetBucketLoggingCommandInput,
    GetBucketLoggingCommandOutput
} from "./commands/GetBucketLoggingCommand";
import {
    GetBucketMetricsConfigurationCommandInput,
    GetBucketMetricsConfigurationCommandOutput
} from "./commands/GetBucketMetricsConfigurationCommand";
import {
    GetBucketNotificationConfigurationCommandInput,
    GetBucketNotificationConfigurationCommandOutput
} from "./commands/GetBucketNotificationConfigurationCommand";
import {
    GetBucketOwnershipControlsCommandInput,
    GetBucketOwnershipControlsCommandOutput
} from "./commands/GetBucketOwnershipControlsCommand";
import {
    GetBucketPolicyCommandInput,
    GetBucketPolicyCommandOutput
} from "./commands/GetBucketPolicyCommand";
import {
    GetBucketPolicyStatusCommandInput,
    GetBucketPolicyStatusCommandOutput
} from "./commands/GetBucketPolicyStatusCommand";
import {
    GetBucketReplicationCommandInput,
    GetBucketReplicationCommandOutput
} from "./commands/GetBucketReplicationCommand";
import {
    GetBucketRequestPaymentCommandInput,
    GetBucketRequestPaymentCommandOutput
} from "./commands/GetBucketRequestPaymentCommand";
import {
    GetBucketTaggingCommandInput,
    GetBucketTaggingCommandOutput
} from "./commands/GetBucketTaggingCommand";
import {
    GetBucketVersioningCommandInput,
    GetBucketVersioningCommandOutput
} from "./commands/GetBucketVersioningCommand";
import {
    GetBucketWebsiteCommandInput,
    GetBucketWebsiteCommandOutput
} from "./commands/GetBucketWebsiteCommand";

import { Command } from "./command";

import { Providers, ProviderType } from "./providers/providers";
import { AWSProviderConfig } from "./providers/awsProvider";
import { AzureProviderConfig } from "./providers/azureProvider";
import { GCSProviderConfig } from "./providers/gcsProvider";

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
    | CopyObjectCommandInput
    | GetObjectAclCommandInput
    | GetObjectAttributesCommandInput
    | GetObjectLegalHoldCommandInput
    | GetObjectLockConfigurationCommandInput
    | GetObjectRetentionCommandInput
    | GetObjectTaggingCommandInput
    | GetObjectTorrentCommandInput
    | GetBucketAccelerateConfigurationCommandInput
    | GetBucketAclCommandInput
    | GetBucketAnalyticsConfigurationCommandInput
    | GetBucketCorsCommandInput
    | GetBucketEncryptionCommandInput
    | GetBucketIntelligentTieringConfigurationCommandInput
    | GetBucketInventoryConfigurationCommandInput
    | GetBucketLifecycleConfigurationCommandInput
    | GetBucketLocationCommandInput
    | GetBucketLoggingCommandInput
    | GetBucketMetricsConfigurationCommandInput
    | GetBucketNotificationConfigurationCommandInput
    | GetBucketOwnershipControlsCommandInput
    | GetBucketPolicyCommandInput
    | GetBucketPolicyStatusCommandInput
    | GetBucketReplicationCommandInput
    | GetBucketRequestPaymentCommandInput
    | GetBucketTaggingCommandInput
    | GetBucketVersioningCommandInput
    | GetBucketWebsiteCommandInput;

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
    | CopyObjectCommandOutput
    | GetObjectAclCommandOutput
    | GetObjectAttributesCommandOutput
    | GetObjectLegalHoldCommandOutput
    | GetObjectLockConfigurationCommandOutput
    | GetObjectRetentionCommandOutput
    | GetObjectTaggingCommandOutput
    | GetObjectTorrentCommandOutput
    | GetBucketAccelerateConfigurationCommandOutput
    | GetBucketAclCommandOutput
    | GetBucketAnalyticsConfigurationCommandOutput
    | GetBucketCorsCommandOutput
    | GetBucketEncryptionCommandOutput
    | GetBucketIntelligentTieringConfigurationCommandOutput
    | GetBucketInventoryConfigurationCommandOutput
    | GetBucketLifecycleConfigurationCommandOutput
    | GetBucketLocationCommandOutput
    | GetBucketLoggingCommandOutput
    | GetBucketMetricsConfigurationCommandOutput
    | GetBucketNotificationConfigurationCommandOutput
    | GetBucketOwnershipControlsCommandOutput
    | GetBucketPolicyCommandOutput
    | GetBucketPolicyStatusCommandOutput
    | GetBucketReplicationCommandOutput
    | GetBucketRequestPaymentCommandOutput
    | GetBucketTaggingCommandOutput
    | GetBucketVersioningCommandOutput
    | GetBucketWebsiteCommandOutput;

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

    providers: Providers;

    constructor(config: PollenClientConfig) {
        this.providers = new Providers(config)
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