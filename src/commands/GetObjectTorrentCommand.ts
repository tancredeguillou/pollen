/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { GetObjectTorrentRequest, GetObjectTorrentOutput } from "../models/models_0";
import { Command } from "../command.js";
import { Providers } from "../providers/providers";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

/**
 * @public
 *
 * The input for {@link GetObjectTorrentCommand}.
 */
export interface GetObjectTorrentCommandInput extends GetObjectTorrentRequest { }
/**
 * @public
 *
 * The output of {@link GetObjectTorrentCommand}.
 */
export interface GetObjectTorrentCommandOutput extends Omit<GetObjectTorrentOutput, "Body">, __MetadataBearer {
    Body?: StreamingBlobPayloadOutputTypes;
}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns torrent files from a bucket. BitTorrent can save you bandwidth when you're
 *          distributing large files.</p>
 *          <note>
 *             <p>You can get torrent only for objects that are less than 5 GB in size, and that are
 *             not encrypted using server-side encryption with a customer-provided encryption
 *             key.</p>
 *          </note>
 *          <p>To use GET, you must have READ access to the object.</p>
 *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectTorrent</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectTorrentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectTorrentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetObjectTorrentRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetObjectTorrentCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectTorrentOutput
 * //   Body: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param GetObjectTorrentCommandInput - {@link GetObjectTorrentCommandInput}
 * @returns {@link GetObjectTorrentCommandOutput}
 * @see {@link GetObjectTorrentCommandInput} for command's `input` shape.
 * @see {@link GetObjectTorrentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 * @example To retrieve torrent files for an object
 * ```javascript
 * // The following example retrieves torrent files of an object.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new GetObjectTorrentCommand(input);
 * await client.send(command);
 * // example id: to-retrieve-torrent-files-for-an-object-1481834115959
 * ```
 *
 */
export class GetObjectTorrentCommand extends Command<
    GetObjectTorrentCommandInput,
    GetObjectTorrentCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: GetObjectTorrentCommandInput;

    constructor(input: GetObjectTorrentCommandInput) {
        super();
        this.input = input;
    }

    /** TODO in essence our objects are "not encrypted", so we could get the torrent files.
     * But could we also do it for GCS and Azure ? And easily recover the file ?
    */
    async resolve(providers: Providers): Promise<void> {
        throw new Error("GetObjectTorrentCommand is not implemented on Pollen, as it only works on unencrypted objects.");
    }

}
