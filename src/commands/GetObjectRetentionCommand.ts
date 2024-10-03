/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetObjectRetentionCommand as __AWS__GetObjectRetentionCommand } from "@aws-sdk/client-s3";

import { GetObjectRetentionRequest, GetObjectRetentionOutput } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link GetObjectRetentionCommand}.
 */
export interface GetObjectRetentionCommandInput extends GetObjectRetentionRequest { }
/**
 * @public
 *
 * The output of {@link GetObjectRetentionCommand}.
 */
export interface GetObjectRetentionCommandOutput extends GetObjectRetentionOutput, __MetadataBearer { }

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Retrieves an object's retention settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking
 *          Objects</a>.</p>
 *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectRetention</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectRetentionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectRetentionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetObjectRetentionRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetObjectRetentionCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectRetentionOutput
 * //   Retention: { // ObjectLockRetention
 * //     Mode: "GOVERNANCE" || "COMPLIANCE",
 * //     RetainUntilDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetObjectRetentionCommandInput - {@link GetObjectRetentionCommandInput}
 * @returns {@link GetObjectRetentionCommandOutput}
 * @see {@link GetObjectRetentionCommandInput} for command's `input` shape.
 * @see {@link GetObjectRetentionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 */
export class GetObjectRetentionCommand extends Command<
    GetObjectRetentionCommandInput,
    GetObjectRetentionCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: GetObjectRetentionCommandInput;

    constructor(input: GetObjectRetentionCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__GetObjectRetentionCommand(this.input));
    }

}