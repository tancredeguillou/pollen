/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
    CreateBucketCommandInput,
    CreateBucketCommandOutput
} from "./commands/CreateBucketCommand.js";
import {
    ListBucketsCommandInput,
    ListBucketsCommandOutput
} from "./commands/ListBucketsCommand.js";
import {
    PutObjectCommandInput,
    PutObjectCommandOutput
} from "./commands/PutObjectCommand.js";
import {
    DeleteBucketCommandInput,
    DeleteBucketCommandOutput
} from "./commands/DeleteBucketCommand.js";
import {
    DeleteObjectCommandOutput,
    DeleteObjectCommandInput,
} from "./commands/DeleteObjectCommand.js";
import {
    GetObjectCommandInput,
    GetObjectCommandOutput
} from "./commands/GetObjectCommand.js";
import {
    ListObjectsCommandInput,
    ListObjectsCommandOutput
} from "./commands/ListObjectsCommand.js";
import {
    CopyObjectCommandInput,
    CopyObjectCommandOutput
} from "./commands/CopyObjectCommand.js";
import {
    GetObjectAclCommandInput,
    GetObjectAclCommandOutput
} from "./commands/GetObjectAclCommand.js";
import {
    GetObjectAttributesCommandInput,
    GetObjectAttributesCommandOutput
} from "./commands/GetObjectAttributesCommand.js";
import {
    GetObjectLegalHoldCommandInput,
    GetObjectLegalHoldCommandOutput
} from "./commands/GetObjectLegalHoldCommand.js";
import {
    GetObjectLockConfigurationCommandInput,
    GetObjectLockConfigurationCommandOutput
} from "./commands/GetObjectLockConfigurationCommand.js";
import {
    GetObjectRetentionCommandInput,
    GetObjectRetentionCommandOutput
} from "./commands/GetObjectRetentionCommand.js";
import {
    GetObjectTaggingCommandInput,
    GetObjectTaggingCommandOutput
} from "./commands/GetObjectTaggingCommand.js";
import {
    GetObjectTorrentCommandInput,
    GetObjectTorrentCommandOutput
} from "./commands/GetObjectTorrentCommand.js";
import {
    GetBucketAccelerateConfigurationCommandInput,
    GetBucketAccelerateConfigurationCommandOutput
} from "./commands/GetBucketAccelerateConfigurationCommand.js";
import {
    GetBucketAclCommandInput,
    GetBucketAclCommandOutput
} from "./commands/GetBucketAclCommand.js";
import {
    GetBucketAnalyticsConfigurationCommandInput,
    GetBucketAnalyticsConfigurationCommandOutput
} from "./commands/GetBucketAnalyticsConfigurationCommand.js";
import {
    GetBucketCorsCommandInput,
    GetBucketCorsCommandOutput
} from "./commands/GetBucketCorsCommand.js";
import {
    GetBucketEncryptionCommandInput,
    GetBucketEncryptionCommandOutput
} from "./commands/GetBucketEncryptionCommand.js";
import {
    GetBucketIntelligentTieringConfigurationCommandInput,
    GetBucketIntelligentTieringConfigurationCommandOutput
} from "./commands/GetBucketIntelligentTieringConfigurationCommand.js";
import {
    GetBucketInventoryConfigurationCommandInput,
    GetBucketInventoryConfigurationCommandOutput
} from "./commands/GetBucketInventoryConfigurationCommand.js";
import {
    GetBucketLifecycleConfigurationCommandInput,
    GetBucketLifecycleConfigurationCommandOutput
} from "./commands/GetBucketLifecycleConfigurationCommand.js";
import {
    GetBucketLocationCommandInput,
    GetBucketLocationCommandOutput
} from "./commands/GetBucketLocationCommand.js";
import {
    GetBucketLoggingCommandInput,
    GetBucketLoggingCommandOutput
} from "./commands/GetBucketLoggingCommand.js";
import {
    GetBucketMetricsConfigurationCommandInput,
    GetBucketMetricsConfigurationCommandOutput
} from "./commands/GetBucketMetricsConfigurationCommand.js";
import {
    GetBucketNotificationConfigurationCommandInput,
    GetBucketNotificationConfigurationCommandOutput
} from "./commands/GetBucketNotificationConfigurationCommand.js";
import {
    GetBucketOwnershipControlsCommandInput,
    GetBucketOwnershipControlsCommandOutput
} from "./commands/GetBucketOwnershipControlsCommand.js";
import {
    GetBucketPolicyCommandInput,
    GetBucketPolicyCommandOutput
} from "./commands/GetBucketPolicyCommand.js";
import {
    GetBucketPolicyStatusCommandInput,
    GetBucketPolicyStatusCommandOutput
} from "./commands/GetBucketPolicyStatusCommand.js";
import {
    GetBucketReplicationCommandInput,
    GetBucketReplicationCommandOutput
} from "./commands/GetBucketReplicationCommand.js";
import {
    GetBucketRequestPaymentCommandInput,
    GetBucketRequestPaymentCommandOutput
} from "./commands/GetBucketRequestPaymentCommand.js";
import {
    GetBucketTaggingCommandInput,
    GetBucketTaggingCommandOutput
} from "./commands/GetBucketTaggingCommand.js";
import {
    GetBucketVersioningCommandInput,
    GetBucketVersioningCommandOutput
} from "./commands/GetBucketVersioningCommand.js";
import {
    GetBucketWebsiteCommandInput,
    GetBucketWebsiteCommandOutput
} from "./commands/GetBucketWebsiteCommand.js";
import {
    DeleteBucketAnalyticsConfigurationCommandInput,
    DeleteBucketAnalyticsConfigurationCommandOutput
} from "./commands/DeleteBucketAnalyticsConfigurationCommand.js";
import {
    DeleteBucketCorsCommandInput,
    DeleteBucketCorsCommandOutput
} from "./commands/DeleteBucketCorsCommand.js";
import {
    DeleteBucketEncryptionCommandInput,
    DeleteBucketEncryptionCommandOutput
} from "./commands/DeleteBucketEncryptionCommand.js";
import {
    DeleteBucketIntelligentTieringConfigurationCommandInput,
    DeleteBucketIntelligentTieringConfigurationCommandOutput
} from "./commands/DeleteBucketIntelligentTieringConfigurationCommand.js";
import {
    DeleteBucketInventoryConfigurationCommandInput,
    DeleteBucketInventoryConfigurationCommandOutput
} from "./commands/DeleteBucketInventoryConfigurationCommand.js";
import {
    DeleteBucketLifecycleCommandInput,
    DeleteBucketLifecycleCommandOutput
} from "./commands/DeleteBucketLifecycleCommand.js";
import {
    DeleteBucketMetricsConfigurationCommandInput,
    DeleteBucketMetricsConfigurationCommandOutput
} from "./commands/DeleteBucketMetricsConfigurationCommand.js";
import {
    DeleteBucketOwnershipControlsCommandInput,
    DeleteBucketOwnershipControlsCommandOutput
} from "./commands/DeleteBucketOwnershipControlsCommand.js";
import {
    DeleteBucketPolicyCommandInput,
    DeleteBucketPolicyCommandOutput
} from "./commands/DeleteBucketPolicyCommand.js";
import {
    DeleteBucketReplicationCommandInput,
    DeleteBucketReplicationCommandOutput
} from "./commands/DeleteBucketReplicationCommand.js";
import {
    DeleteBucketTaggingCommandInput,
    DeleteBucketTaggingCommandOutput
} from "./commands/DeleteBucketTaggingCommand.js";
import {
    DeleteBucketWebsiteCommandInput,
    DeleteBucketWebsiteCommandOutput
} from "./commands/DeleteBucketWebsiteCommand.js";
import {
    PutBucketAccelerateConfigurationCommandInput,
    PutBucketAccelerateConfigurationCommandOutput
} from "./commands/PutBucketAccelerateConfigurationCommand.js";
import {
    PutBucketAclCommandInput,
    PutBucketAclCommandOutput
} from "./commands/PutBucketAclCommand.js";
import {
    PutBucketAnalyticsConfigurationCommandInput,
    PutBucketAnalyticsConfigurationCommandOutput
} from "./commands/PutBucketAnalyticsConfigurationCommand.js";
import {
    PutBucketCorsCommandInput,
    PutBucketCorsCommandOutput
} from "./commands/PutBucketCorsCommand.js";
import {
    PutBucketEncryptionCommandInput,
    PutBucketEncryptionCommandOutput
} from "./commands/PutBucketEncryptionCommand.js";
import {
    PutBucketIntelligentTieringConfigurationCommandInput,
    PutBucketIntelligentTieringConfigurationCommandOutput
} from "./commands/PutBucketIntelligentTieringConfigurationCommand.js";
import {
    PutBucketInventoryConfigurationCommandInput,
    PutBucketInventoryConfigurationCommandOutput
} from "./commands/PutBucketInventoryConfigurationCommand.js";
import {
    PutBucketLifecycleConfigurationCommandInput,
    PutBucketLifecycleConfigurationCommandOutput
} from "./commands/PutBucketLifecycleConfigurationCommand.js";
import {
    PutBucketLoggingCommandInput,
    PutBucketLoggingCommandOutput
} from "./commands/PutBucketLoggingCommand.js";
import {
    PutBucketMetricsConfigurationCommandInput,
    PutBucketMetricsConfigurationCommandOutput
} from "./commands/PutBucketMetricsConfigurationCommand.js";
import {
    PutBucketNotificationConfigurationCommandInput,
    PutBucketNotificationConfigurationCommandOutput
} from "./commands/PutBucketNotificationConfigurationCommand.js";
import {
    PutBucketOwnershipControlsCommandInput,
    PutBucketOwnershipControlsCommandOutput
} from "./commands/PutBucketOwnershipControlsCommand.js";
import {
    PutBucketPolicyCommandInput,
    PutBucketPolicyCommandOutput
} from "./commands/PutBucketPolicyCommand.js";
import {
    PutBucketReplicationCommandInput,
    PutBucketReplicationCommandOutput
} from "./commands/PutBucketReplicationCommand.js";
import {
    PutBucketRequestPaymentCommandInput,
    PutBucketRequestPaymentCommandOutput
} from "./commands/PutBucketRequestPaymentCommand.js";
import {
    PutBucketTaggingCommandInput,
    PutBucketTaggingCommandOutput
} from "./commands/PutBucketTaggingCommand.js";
import {
    PutBucketVersioningCommandInput,
    PutBucketVersioningCommandOutput
} from "./commands/PutBucketVersioningCommand.js";
import {
    PutBucketWebsiteCommandInput,
    PutBucketWebsiteCommandOutput
} from "./commands/PutBucketWebsiteCommand.js";
import {
    PutObjectAclCommandInput,
    PutObjectAclCommandOutput
} from "./commands/PutObjectAclCommand.js";
import {
    PutObjectLegalHoldCommandInput,
    PutObjectLegalHoldCommandOutput
} from "./commands/PutObjectLegalHoldCommand.js";
import {
    PutObjectLockConfigurationCommandInput,
    PutObjectLockConfigurationCommandOutput
} from "./commands/PutObjectLockConfigurationCommand.js";
import {
    PutObjectRetentionCommandInput,
    PutObjectRetentionCommandOutput
} from "./commands/PutObjectRetentionCommand.js";
import {
    PutObjectTaggingCommandInput,
    PutObjectTaggingCommandOutput
} from "./commands/PutObjectTaggingCommand.js";
import {
    HeadBucketCommandInput,
    HeadBucketCommandOutput
} from "./commands/HeadBucketCommand.js";
import {
    HeadObjectCommandInput,
    HeadObjectCommandOutput
} from "./commands/HeadObjectCommand.js";
import {
    GetPublicAccessBlockCommandInput,
    GetPublicAccessBlockCommandOutput
} from "./commands/GetPublicAccessBlockCommand.js";
import {
    DeleteObjectTaggingCommandInput,
    DeleteObjectTaggingCommandOutput
} from "./commands/DeleteObjectTaggingCommand.js";

import { Command } from "./command.js";

import { Providers } from "./providers/providers.js";
import { AWSProviderConfig } from "./providers/awsProvider.js";
import { AzureProviderConfig } from "./providers/azureProvider.js";
import { GCSProviderConfig } from "./providers/gcsProvider.js";

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
    | GetBucketWebsiteCommandInput
    | DeleteBucketAnalyticsConfigurationCommandInput
    | DeleteBucketCorsCommandInput
    | DeleteBucketEncryptionCommandInput
    | DeleteBucketIntelligentTieringConfigurationCommandInput
    | DeleteBucketInventoryConfigurationCommandInput
    | DeleteBucketLifecycleCommandInput
    | DeleteBucketMetricsConfigurationCommandInput
    | DeleteBucketOwnershipControlsCommandInput
    | DeleteBucketPolicyCommandInput
    | DeleteBucketReplicationCommandInput
    | DeleteBucketTaggingCommandInput
    | DeleteBucketWebsiteCommandInput
    | PutBucketAccelerateConfigurationCommandInput
    | PutBucketAclCommandInput
    | PutBucketAnalyticsConfigurationCommandInput
    | PutBucketCorsCommandInput
    | PutBucketEncryptionCommandInput
    | PutBucketIntelligentTieringConfigurationCommandInput
    | PutBucketInventoryConfigurationCommandInput
    | PutBucketLifecycleConfigurationCommandInput
    | PutBucketLoggingCommandInput
    | PutBucketMetricsConfigurationCommandInput
    | PutBucketNotificationConfigurationCommandInput
    | PutBucketOwnershipControlsCommandInput
    | PutBucketPolicyCommandInput
    | PutBucketReplicationCommandInput
    | PutBucketRequestPaymentCommandInput
    | PutBucketTaggingCommandInput
    | PutBucketVersioningCommandInput
    | PutBucketWebsiteCommandInput
    | PutObjectAclCommandInput
    | PutObjectLegalHoldCommandInput
    | PutObjectLockConfigurationCommandInput
    | PutObjectRetentionCommandInput
    | PutObjectTaggingCommandInput
    | HeadBucketCommandInput
    | HeadObjectCommandInput
    | GetPublicAccessBlockCommandInput
    | DeleteObjectTaggingCommandInput;

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
    | GetBucketWebsiteCommandOutput
    | DeleteBucketAnalyticsConfigurationCommandOutput
    | DeleteBucketCorsCommandOutput
    | DeleteBucketEncryptionCommandOutput
    | DeleteBucketIntelligentTieringConfigurationCommandOutput
    | DeleteBucketInventoryConfigurationCommandOutput
    | DeleteBucketLifecycleCommandOutput
    | DeleteBucketMetricsConfigurationCommandOutput
    | DeleteBucketOwnershipControlsCommandOutput
    | DeleteBucketPolicyCommandOutput
    | DeleteBucketReplicationCommandOutput
    | DeleteBucketTaggingCommandOutput
    | DeleteBucketWebsiteCommandOutput
    | PutBucketAccelerateConfigurationCommandOutput
    | PutBucketAclCommandOutput
    | PutBucketAnalyticsConfigurationCommandOutput
    | PutBucketCorsCommandOutput
    | PutBucketEncryptionCommandOutput
    | PutBucketIntelligentTieringConfigurationCommandOutput
    | PutBucketInventoryConfigurationCommandOutput
    | PutBucketLifecycleConfigurationCommandOutput
    | PutBucketLoggingCommandOutput
    | PutBucketMetricsConfigurationCommandOutput
    | PutBucketNotificationConfigurationCommandOutput
    | PutBucketOwnershipControlsCommandOutput
    | PutBucketPolicyCommandOutput
    | PutBucketReplicationCommandOutput
    | PutBucketRequestPaymentCommandOutput
    | PutBucketTaggingCommandOutput
    | PutBucketVersioningCommandOutput
    | PutBucketWebsiteCommandOutput
    | PutObjectAclCommandOutput
    | PutObjectLegalHoldCommandOutput
    | PutObjectLockConfigurationCommandOutput
    | PutObjectRetentionCommandOutput
    | PutObjectTaggingCommandOutput
    | HeadBucketCommandOutput
    | HeadObjectCommandOutput
    | GetPublicAccessBlockCommandOutput
    | DeleteObjectTaggingCommandOutput;

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