/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetBucketAccelerateConfigurationCommand as __AWS__GetBucketAccelerateConfigurationCommand } from "@aws-sdk/client-s3";

import { GetBucketAccelerateConfigurationRequest, GetBucketAccelerateConfigurationOutput } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link GetBucketAccelerateConfigurationCommand}.
 */
export interface GetBucketAccelerateConfigurationCommandInput extends GetBucketAccelerateConfigurationRequest { }
/**
 * @public
 *
 * The output of {@link GetBucketAccelerateConfigurationCommand}.
 */
export interface GetBucketAccelerateConfigurationCommandOutput
    extends GetBucketAccelerateConfigurationOutput,
    __MetadataBearer { }

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>This implementation of the GET action uses the <code>accelerate</code> subresource to
 *          return the Transfer Acceleration state of a bucket, which is either <code>Enabled</code> or
 *             <code>Suspended</code>. Amazon S3 Transfer Acceleration is a bucket-level feature that
 *          enables you to perform faster data transfers to and from Amazon S3.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:GetAccelerateConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to your Amazon S3 Resources</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>You set the Transfer Acceleration state of an existing bucket to <code>Enabled</code> or
 *             <code>Suspended</code> by using the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html">PutBucketAccelerateConfiguration</a> operation. </p>
 *          <p>A GET <code>accelerate</code> request does not return a state value for a bucket that
 *          has no transfer acceleration state. A bucket has no Transfer Acceleration state if a state
 *          has never been set on the bucket. </p>
 *          <p>For more information about transfer acceleration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Transfer Acceleration</a> in
 *          the Amazon S3 User Guide.</p>
 *          <p>The following operations are related to
 *          <code>GetBucketAccelerateConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html">PutBucketAccelerateConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketAccelerateConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketAccelerateConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketAccelerateConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   RequestPayer: "requester",
 * };
 * const command = new GetBucketAccelerateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketAccelerateConfigurationOutput
 * //   Status: "Enabled" || "Suspended",
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param GetBucketAccelerateConfigurationCommandInput - {@link GetBucketAccelerateConfigurationCommandInput}
 * @returns {@link GetBucketAccelerateConfigurationCommandOutput}
 * @see {@link GetBucketAccelerateConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketAccelerateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 */
export class GetBucketAccelerateConfigurationCommand extends Command<
    GetBucketAccelerateConfigurationCommandInput,
    GetBucketAccelerateConfigurationCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: GetBucketAccelerateConfigurationCommandInput;

    constructor(input: GetBucketAccelerateConfigurationCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__GetBucketAccelerateConfigurationCommand(this.input));
    }

}