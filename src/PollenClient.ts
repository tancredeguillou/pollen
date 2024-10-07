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
import {
    DeleteBucketAnalyticsConfigurationCommandInput,
    DeleteBucketAnalyticsConfigurationCommandOutput
} from "./commands/DeleteBucketAnalyticsConfigurationCommand";
import {
    DeleteBucketCorsCommandInput,
    DeleteBucketCorsCommandOutput
} from "./commands/DeleteBucketCorsCommand";
import {
    DeleteBucketEncryptionCommandInput,
    DeleteBucketEncryptionCommandOutput
} from "./commands/DeleteBucketEncryptionCommand";
import {
    DeleteBucketIntelligentTieringConfigurationCommandInput,
    DeleteBucketIntelligentTieringConfigurationCommandOutput
} from "./commands/DeleteBucketIntelligentTieringConfigurationCommand";
import {
    DeleteBucketInventoryConfigurationCommandInput,
    DeleteBucketInventoryConfigurationCommandOutput
} from "./commands/DeleteBucketInventoryConfigurationCommand";
import {
    DeleteBucketLifecycleCommandInput,
    DeleteBucketLifecycleCommandOutput
} from "./commands/DeleteBucketLifecycleCommand";
import {
    DeleteBucketMetricsConfigurationCommandInput,
    DeleteBucketMetricsConfigurationCommandOutput
} from "./commands/DeleteBucketMetricsConfigurationCommand";
import {
    DeleteBucketOwnershipControlsCommandInput,
    DeleteBucketOwnershipControlsCommandOutput
} from "./commands/DeleteBucketOwnershipControlsCommand";
import {
    DeleteBucketPolicyCommandInput,
    DeleteBucketPolicyCommandOutput
} from "./commands/DeleteBucketPolicyCommand";
import {
    DeleteBucketReplicationCommandInput,
    DeleteBucketReplicationCommandOutput
} from "./commands/DeleteBucketReplicationCommand";
import {
    DeleteBucketTaggingCommandInput,
    DeleteBucketTaggingCommandOutput
} from "./commands/DeleteBucketTaggingCommand";
import {
    DeleteBucketWebsiteCommandInput,
    DeleteBucketWebsiteCommandOutput
} from "./commands/DeleteBucketWebsiteCommand";
import {
    PutBucketAccelerateConfigurationCommandInput,
    PutBucketAccelerateConfigurationCommandOutput
} from "./commands/PutBucketAccelerateConfigurationCommand";
import {
    PutBucketAclCommandInput,
    PutBucketAclCommandOutput
} from "./commands/PutBucketAclCommand";
import {
    PutBucketAnalyticsConfigurationCommandInput,
    PutBucketAnalyticsConfigurationCommandOutput
} from "./commands/PutBucketAnalyticsConfigurationCommand";
import {
    PutBucketCorsCommandInput,
    PutBucketCorsCommandOutput
} from "./commands/PutBucketCorsCommand";
import {
    PutBucketEncryptionCommandInput,
    PutBucketEncryptionCommandOutput
} from "./commands/PutBucketEncryptionCommand";
import {
    PutBucketIntelligentTieringConfigurationCommandInput,
    PutBucketIntelligentTieringConfigurationCommandOutput
} from "./commands/PutBucketIntelligentTieringConfigurationCommand";
import {
    PutBucketInventoryConfigurationCommandInput,
    PutBucketInventoryConfigurationCommandOutput
} from "./commands/PutBucketInventoryConfigurationCommand";
import {
    PutBucketLifecycleConfigurationCommandInput,
    PutBucketLifecycleConfigurationCommandOutput
} from "./commands/PutBucketLifecycleConfigurationCommand";
import {
    PutBucketLoggingCommandInput,
    PutBucketLoggingCommandOutput
} from "./commands/PutBucketLoggingCommand";
import {
    PutBucketMetricsConfigurationCommandInput,
    PutBucketMetricsConfigurationCommandOutput
} from "./commands/PutBucketMetricsConfigurationCommand";
import {
    PutBucketNotificationConfigurationCommandInput,
    PutBucketNotificationConfigurationCommandOutput
} from "./commands/PutBucketNotificationConfigurationCommand";
import {
    PutBucketOwnershipControlsCommandInput,
    PutBucketOwnershipControlsCommandOutput
} from "./commands/PutBucketOwnershipControlsCommand";
import {
    PutBucketPolicyCommandInput,
    PutBucketPolicyCommandOutput
} from "./commands/PutBucketPolicyCommand";
import {
    PutBucketReplicationCommandInput,
    PutBucketReplicationCommandOutput
} from "./commands/PutBucketReplicationCommand";
import {
    PutBucketRequestPaymentCommandInput,
    PutBucketRequestPaymentCommandOutput
} from "./commands/PutBucketRequestPaymentCommand";
import {
    PutBucketTaggingCommandInput,
    PutBucketTaggingCommandOutput
} from "./commands/PutBucketTaggingCommand";
import {
    PutBucketVersioningCommandInput,
    PutBucketVersioningCommandOutput
} from "./commands/PutBucketVersioningCommand";
import {
    PutBucketWebsiteCommandInput,
    PutBucketWebsiteCommandOutput
} from "./commands/PutBucketWebsiteCommand";
import {
    PutObjectAclCommandInput,
    PutObjectAclCommandOutput
} from "./commands/PutObjectAclCommand";
import {
    PutObjectLegalHoldCommandInput,
    PutObjectLegalHoldCommandOutput
} from "./commands/PutObjectLegalHoldCommand";
import {
    PutObjectLockConfigurationCommandInput,
    PutObjectLockConfigurationCommandOutput
} from "./commands/PutObjectLockConfigurationCommand";
import {
    PutObjectRetentionCommandInput,
    PutObjectRetentionCommandOutput
} from "./commands/PutObjectRetentionCommand";
import {
    PutObjectTaggingCommandInput,
    PutObjectTaggingCommandOutput
} from "./commands/PutObjectTaggingCommand";

import { Command } from "./command";

import { Providers } from "./providers/providers";
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
    | PutObjectTaggingCommandInput;

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
    | PutObjectTaggingCommandOutput;

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