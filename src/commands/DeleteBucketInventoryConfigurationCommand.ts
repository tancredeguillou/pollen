/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { DeleteBucketInventoryConfigurationCommand as __AWS__DeleteBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3";

import { DeleteBucketInventoryConfigurationRequest } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link DeleteBucketInventoryConfigurationCommand}.
 */
export interface DeleteBucketInventoryConfigurationCommandInput extends DeleteBucketInventoryConfigurationRequest { }
/**
 * @public
 *
 * The output of {@link DeleteBucketInventoryConfigurationCommand}.
 */
export interface DeleteBucketInventoryConfigurationCommandOutput extends __MetadataBearer { }

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Deletes an inventory configuration (identified by the inventory ID) from the
 *          bucket.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:PutInventoryConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p>
 *          <p>Operations related to <code>DeleteBucketInventoryConfiguration</code> include: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html">GetBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketInventoryConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketInventoryConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketInventoryConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketInventoryConfigurationCommandInput - {@link DeleteBucketInventoryConfigurationCommandInput}
 * @returns {@link DeleteBucketInventoryConfigurationCommandOutput}
 * @see {@link DeleteBucketInventoryConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketInventoryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 */
export class DeleteBucketInventoryConfigurationCommand extends Command<
    DeleteBucketInventoryConfigurationCommandInput,
    DeleteBucketInventoryConfigurationCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: DeleteBucketInventoryConfigurationCommandInput;

    constructor(input: DeleteBucketInventoryConfigurationCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__DeleteBucketInventoryConfigurationCommand(this.input));
    }

}