/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetBucketLifecycleConfigurationCommand as __AWS__GetBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3";

import { GetBucketLifecycleConfigurationRequest, GetBucketLifecycleConfigurationOutput } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link GetBucketLifecycleConfigurationCommand}.
 */
export interface GetBucketLifecycleConfigurationCommandInput extends GetBucketLifecycleConfigurationRequest { }
/**
 * @public
 *
 * The output of {@link GetBucketLifecycleConfigurationCommand}.
 */
export interface GetBucketLifecycleConfigurationCommandOutput
    extends GetBucketLifecycleConfigurationOutput,
    __MetadataBearer { }

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <note>
 *             <p>Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility.
 *             For the related API description, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html">GetBucketLifecycle</a>. Accordingly,
 *             this section describes the latest API. The response describes the new filter element
 *             that you can use to specify a filter to select a subset of objects to which the rule
 *             applies. If you are using a previous version of the lifecycle configuration, it still
 *             works. For the earlier action, </p>
 *          </note>
 *          <p>Returns the lifecycle configuration information set on the bucket. For information about
 *          lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle
 *          Management</a>.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:GetLifecycleConfiguration</code> action. The bucket owner has this permission,
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>
 *             <code>GetBucketLifecycleConfiguration</code> has the following special error:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>NoSuchLifecycleConfiguration</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The lifecycle configuration does not exist.</p>
 *                   </li>
 *                   <li>
 *                      <p>HTTP Status Code: 404 Not Found</p>
 *                   </li>
 *                   <li>
 *                      <p>SOAP Fault Code Prefix: Client</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>The following operations are related to
 *          <code>GetBucketLifecycleConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html">GetBucketLifecycle</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html">PutBucketLifecycle</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketLifecycleConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLifecycleConfigurationOutput
 * //   Rules: [ // LifecycleRules
 * //     { // LifecycleRule
 * //       Expiration: { // LifecycleExpiration
 * //         Date: new Date("TIMESTAMP"),
 * //         Days: Number("int"),
 * //         ExpiredObjectDeleteMarker: true || false,
 * //       },
 * //       ID: "STRING_VALUE",
 * //       Prefix: "STRING_VALUE",
 * //       Filter: { // LifecycleRuleFilter Union: only one key present
 * //         Prefix: "STRING_VALUE",
 * //         Tag: { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         ObjectSizeGreaterThan: Number("long"),
 * //         ObjectSizeLessThan: Number("long"),
 * //         And: { // LifecycleRuleAndOperator
 * //           Prefix: "STRING_VALUE",
 * //           Tags: [ // TagSet
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           ObjectSizeGreaterThan: Number("long"),
 * //           ObjectSizeLessThan: Number("long"),
 * //         },
 * //       },
 * //       Status: "Enabled" || "Disabled", // required
 * //       Transitions: [ // TransitionList
 * //         { // Transition
 * //           Date: new Date("TIMESTAMP"),
 * //           Days: Number("int"),
 * //           StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "GLACIER_IR",
 * //         },
 * //       ],
 * //       NoncurrentVersionTransitions: [ // NoncurrentVersionTransitionList
 * //         { // NoncurrentVersionTransition
 * //           NoncurrentDays: Number("int"),
 * //           StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "GLACIER_IR",
 * //           NewerNoncurrentVersions: Number("int"),
 * //         },
 * //       ],
 * //       NoncurrentVersionExpiration: { // NoncurrentVersionExpiration
 * //         NoncurrentDays: Number("int"),
 * //         NewerNoncurrentVersions: Number("int"),
 * //       },
 * //       AbortIncompleteMultipartUpload: { // AbortIncompleteMultipartUpload
 * //         DaysAfterInitiation: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   TransitionDefaultMinimumObjectSize: "varies_by_storage_class" || "all_storage_classes_128K",
 * // };
 *
 * ```
 *
 * @param GetBucketLifecycleConfigurationCommandInput - {@link GetBucketLifecycleConfigurationCommandInput}
 * @returns {@link GetBucketLifecycleConfigurationCommandOutput}
 * @see {@link GetBucketLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 * @example To get lifecycle configuration on a bucket
 * ```javascript
 * // The following example retrieves lifecycle configuration on set on a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Rules": [
 *     {
 *       "ID": "Rule for TaxDocs/",
 *       "Prefix": "TaxDocs",
 *       "Status": "Enabled",
 *       "Transitions": [
 *         {
 *           "Days": 365,
 *           "StorageClass": "STANDARD_IA"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-lifecycle-configuration-on-a-bucket-1481666063200
 * ```
 *
 */
export class GetBucketLifecycleConfigurationCommand extends Command<
    GetBucketLifecycleConfigurationCommandInput,
    GetBucketLifecycleConfigurationCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: GetBucketLifecycleConfigurationCommandInput;

    constructor(input: GetBucketLifecycleConfigurationCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__GetBucketLifecycleConfigurationCommand(this.input));
    }

}