/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetObjectLegalHoldCommand as __AWS__GetObjectLegalHoldCommand } from "@aws-sdk/client-s3";

import { GetObjectLegalHoldRequest, GetObjectLegalHoldOutput } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandInput extends GetObjectLegalHoldRequest { }
/**
 * @public
 *
 * The output of {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandOutput extends GetObjectLegalHoldOutput, __MetadataBearer { }

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Gets an object's current legal hold status. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking
 *          Objects</a>.</p>
 *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectLegalHold</code>:</p>
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
 * import { S3Client, GetObjectLegalHoldCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectLegalHoldCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetObjectLegalHoldRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetObjectLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectLegalHoldOutput
 * //   LegalHold: { // ObjectLockLegalHold
 * //     Status: "ON" || "OFF",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetObjectLegalHoldCommandInput - {@link GetObjectLegalHoldCommandInput}
 * @returns {@link GetObjectLegalHoldCommandOutput}
 * @see {@link GetObjectLegalHoldCommandInput} for command's `input` shape.
 * @see {@link GetObjectLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 */
export class GetObjectLegalHoldCommand extends Command<
    GetObjectLegalHoldCommandInput,
    GetObjectLegalHoldCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: GetObjectLegalHoldCommandInput;

    constructor(input: GetObjectLegalHoldCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        await providers.getAwsProvider().client.send(new __AWS__GetObjectLegalHoldCommand(this.input));
    }

}

