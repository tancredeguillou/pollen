/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { DeleteBucketLifecycleCommand as __AWS__DeleteBucketLifecycleCommand } from "@aws-sdk/client-s3";

import { DeleteBucketLifecycleRequest } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link DeleteBucketLifecycleCommand}.
 */
export interface DeleteBucketLifecycleCommandInput extends DeleteBucketLifecycleRequest { }
/**
 * @public
 *
 * The output of {@link DeleteBucketLifecycleCommand}.
 */
export interface DeleteBucketLifecycleCommandOutput extends __MetadataBearer { }

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Deletes the lifecycle configuration from the specified bucket. Amazon S3 removes all the
 *          lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your
 *          objects never expire, and Amazon S3 no longer automatically deletes any objects on the basis of
 *          rules contained in the deleted lifecycle configuration.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:PutLifecycleConfiguration</code> action. By default, the bucket owner has this
 *          permission and the bucket owner can grant this permission to others.</p>
 *          <p>There is usually some time lag before lifecycle configuration deletion is fully
 *          propagated to all the Amazon S3 systems.</p>
 *          <p>For more information about the object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketLifecycleCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketLifecycleCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketLifecycleRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketLifecycleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketLifecycleCommandInput - {@link DeleteBucketLifecycleCommandInput}
 * @returns {@link DeleteBucketLifecycleCommandOutput}
 * @see {@link DeleteBucketLifecycleCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketLifecycleCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 * @example To delete lifecycle configuration on a bucket.
 * ```javascript
 * // The following example deletes lifecycle configuration on a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new DeleteBucketLifecycleCommand(input);
 * await client.send(command);
 * // example id: to-delete-lifecycle-configuration-on-a-bucket-1483043310583
 * ```
 *
 */
export class DeleteBucketLifecycleCommand extends Command<
    DeleteBucketLifecycleCommandInput,
    DeleteBucketLifecycleCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: DeleteBucketLifecycleCommandInput;

    constructor(input: DeleteBucketLifecycleCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__DeleteBucketLifecycleCommand(this.input));
    }

}