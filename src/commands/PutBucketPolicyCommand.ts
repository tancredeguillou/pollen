/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { PutBucketPolicyCommand as __AWS__PutBucketPolicyCommand } from "@aws-sdk/client-s3";

import { PutBucketPolicyRequest } from "../models/models_1";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link PutBucketPolicyCommand}.
 */
export interface PutBucketPolicyCommandInput extends PutBucketPolicyRequest { }
/**
 * @public
 *
 * The output of {@link PutBucketPolicyCommand}.
 */
export interface PutBucketPolicyCommandOutput extends __MetadataBearer { }

/**
 * <p>Applies an Amazon S3 bucket policy to an Amazon S3 bucket.</p>
 *          <note>
 *             <p>
 *                <b>Directory buckets </b> - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format <code>https://s3express-control.<i>region_code</i>.amazonaws.com/<i>bucket-name</i>
 *                </code>. Virtual-hosted-style requests aren't supported.
 * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-Regions-and-Zones.html">Regional and Zonal endpoints</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>If you are using an identity other than the
 *                   root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the
 *                   <code>PutBucketPolicy</code> permissions on the specified bucket and belong to the
 *                   bucket owner's account in order to use this operation.</p>
 *                <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403
 *                   Access Denied</code> error. If you have the correct permissions, but you're not using an
 *                   identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not
 *                      Allowed</code> error.</p>
 *                <important>
 *                   <p>To ensure that bucket owners don't inadvertently lock themselves out of their own
 *                      buckets, the root principal in a bucket owner's Amazon Web Services account can perform the
 *                      <code>GetBucketPolicy</code>, <code>PutBucketPolicy</code>, and
 *                      <code>DeleteBucketPolicy</code> API actions, even if their bucket policy explicitly
 *                      denies the root principal's access. Bucket owner root principals can only be blocked
 *                      from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations
 *                      policies.</p>
 *                </important>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - The <code>s3:PutBucketPolicy</code> permission is required in a policy.
 *                         For more information about general purpose buckets bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 *                            Policies</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory bucket permissions</b> - To grant access to this API operation, you must have the <code>s3express:PutBucketPolicy</code> permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html">Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>Example bucket policies</dt>
 *             <dd>
 *                <p>
 *                   <b>General purpose buckets example bucket policies</b> - See <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html">Bucket policy examples</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                <p>
 *                   <b>Directory bucket example bucket policies</b> - See <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html">Example bucket policies for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>s3express-control.<i>region</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>PutBucketPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketPolicyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketPolicyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketPolicyRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   ConfirmRemoveSelfBucketAccess: true || false,
 *   Policy: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketPolicyCommandInput - {@link PutBucketPolicyCommandInput}
 * @returns {@link PutBucketPolicyCommandOutput}
 * @see {@link PutBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 * @example Set bucket policy
 * ```javascript
 * // The following example sets a permission policy on a bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Policy": "{\"Version\": \"2012-10-17\", \"Statement\": [{ \"Sid\": \"id-1\",\"Effect\": \"Allow\",\"Principal\": {\"AWS\": \"arn:aws:iam::123456789012:root\"}, \"Action\": [ \"s3:PutObject\",\"s3:PutObjectAcl\"], \"Resource\": [\"arn:aws:s3:::acl3/*\" ] } ]}"
 * };
 * const command = new PutBucketPolicyCommand(input);
 * await client.send(command);
 * // example id: set-bucket-policy-1482448903302
 * ```
 *
 */
export class PutBucketPolicyCommand extends Command<
    PutBucketPolicyCommandInput,
    PutBucketPolicyCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: PutBucketPolicyCommandInput;

    constructor(input: PutBucketPolicyCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__PutBucketPolicyCommand(this.input));
    }

}