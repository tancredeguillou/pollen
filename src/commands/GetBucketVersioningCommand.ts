/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetBucketVersioningCommand as __AWS__GetBucketVersioningCommand } from "@aws-sdk/client-s3";

import { GetBucketVersioningRequest, GetBucketVersioningOutput } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link GetBucketVersioningCommand}.
 */
export interface GetBucketVersioningCommandInput extends GetBucketVersioningRequest { }
/**
 * @public
 *
 * The output of {@link GetBucketVersioningCommand}.
 */
export interface GetBucketVersioningCommandOutput extends GetBucketVersioningOutput, __MetadataBearer { }

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns the versioning state of a bucket.</p>
 *          <p>To retrieve the versioning state of a bucket, you must be the bucket owner.</p>
 *          <p>This implementation also returns the MFA Delete status of the versioning state. If the
 *          MFA Delete status is <code>enabled</code>, the bucket owner must use an authentication
 *          device to change the versioning state of the bucket.</p>
 *          <p>The following operations are related to <code>GetBucketVersioning</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketVersioningCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketVersioningCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketVersioningRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketVersioningCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketVersioningOutput
 * //   Status: "Enabled" || "Suspended",
 * //   MFADelete: "Enabled" || "Disabled",
 * // };
 *
 * ```
 *
 * @param GetBucketVersioningCommandInput - {@link GetBucketVersioningCommandInput}
 * @returns {@link GetBucketVersioningCommandOutput}
 * @see {@link GetBucketVersioningCommandInput} for command's `input` shape.
 * @see {@link GetBucketVersioningCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 * @example To get bucket versioning configuration
 * ```javascript
 * // The following example retrieves bucket versioning configuration.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketVersioningCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MFADelete": "Disabled",
 *   "Status": "Enabled"
 * }
 * *\/
 * // example id: to-get-bucket-versioning-configuration-1483037183929
 * ```
 *
 */
export class GetBucketVersioningCommand extends Command<
    GetBucketVersioningCommandInput,
    GetBucketVersioningCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: GetBucketVersioningCommandInput;

    constructor(input: GetBucketVersioningCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__GetBucketVersioningCommand(this.input));
    }

}