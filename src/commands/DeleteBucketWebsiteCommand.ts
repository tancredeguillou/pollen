/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { DeleteBucketWebsiteCommand as __AWS__DeleteBucketWebsiteCommand } from "@aws-sdk/client-s3";

import { DeleteBucketWebsiteRequest } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link DeleteBucketWebsiteCommand}.
 */
export interface DeleteBucketWebsiteCommandInput extends DeleteBucketWebsiteRequest { }
/**
 * @public
 *
 * The output of {@link DeleteBucketWebsiteCommand}.
 */
export interface DeleteBucketWebsiteCommandOutput extends __MetadataBearer { }

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>This action removes the website configuration for a bucket. Amazon S3 returns a <code>200
 *             OK</code> response upon successfully deleting a website configuration on the specified
 *          bucket. You will get a <code>200 OK</code> response if the website configuration you are
 *          trying to delete does not exist on the bucket. Amazon S3 returns a <code>404</code> response if
 *          the bucket specified in the request does not exist.</p>
 *          <p>This DELETE action requires the <code>S3:DeleteBucketWebsite</code> permission. By
 *          default, only the bucket owner can delete the website configuration attached to a bucket.
 *          However, bucket owners can grant other users permission to delete the website configuration
 *          by writing a bucket policy granting them the <code>S3:DeleteBucketWebsite</code>
 *          permission. </p>
 *          <p>For more information about hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p>
 *          <p>The following operations are related to <code>DeleteBucketWebsite</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html">DeleteBucketWebsite</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html">PutBucketWebsite</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketWebsiteCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketWebsiteCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketWebsiteRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketWebsiteCommandInput - {@link DeleteBucketWebsiteCommandInput}
 * @returns {@link DeleteBucketWebsiteCommandOutput}
 * @see {@link DeleteBucketWebsiteCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketWebsiteCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 * @example To delete bucket website configuration
 * ```javascript
 * // The following example deletes bucket website configuration.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new DeleteBucketWebsiteCommand(input);
 * await client.send(command);
 * // example id: to-delete-bucket-website-configuration-1483043937825
 * ```
 *
 */
export class DeleteBucketWebsiteCommand extends Command<
    DeleteBucketWebsiteCommandInput,
    DeleteBucketWebsiteCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: DeleteBucketWebsiteCommandInput;

    constructor(input: DeleteBucketWebsiteCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__DeleteBucketWebsiteCommand(this.input));
    }

}