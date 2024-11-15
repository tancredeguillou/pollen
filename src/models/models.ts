/**
 * Author: Tancrede Guillou
 */

import { ChecksumAlgorithm, ObjectCannedACL, ObjectLockLegalHoldStatus, ObjectLockMode, RequestCharged, RequestPayer, ServerSideEncryption, StorageClass } from "@aws-sdk/client-s3";
import { StreamingBlobTypes } from "@smithy/types";

/**
 * <p> In terms of implementation, a Bucket is a resource.  </p>
 * @public
 */
export interface Bucket {
    /**
     * <p>The name of the bucket.</p>
     * @public
     */
    Name?: string;

    /**
     * <p>Date the bucket was created. This date can change when making changes to your bucket,
     *          such as editing its bucket policy.</p>
     * @public
     */
    CreationDate?: Date;
}

/**
 * <p>Container for the owner's display name and ID.</p>
 * @public
 */
export interface Owner {
    /**
     * <p>Container for the display name of the owner. This value is only supported in the
     *          following Amazon Web Services Regions:</p>
     *          <ul>
     *             <li>
     *                <p>US East (N. Virginia)</p>
     *             </li>
     *             <li>
     *                <p>US West (N. California)</p>
     *             </li>
     *             <li>
     *                <p>US West (Oregon)</p>
     *             </li>
     *             <li>
     *                <p>Asia Pacific (Singapore)</p>
     *             </li>
     *             <li>
     *                <p>Asia Pacific (Sydney)</p>
     *             </li>
     *             <li>
     *                <p>Asia Pacific (Tokyo)</p>
     *             </li>
     *             <li>
     *                <p>Europe (Ireland)</p>
     *             </li>
     *             <li>
     *                <p>South America (São Paulo)</p>
     *             </li>
     *          </ul>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    DisplayName?: string;

    /**
     * <p>Container for the ID of the owner.</p>
     * @public
     */
    ID?: string;
}

export interface CreateBucketRequest {
    Bucket: string;
}

export interface CreateBucketOutput {
    /**
     * <p>A forward slash followed by the name of the bucket.</p>
     * @public
     */
    Location?: string;
}

export interface ListBucketsOutput {
    /**
     * <p>The list of buckets owned by the requester.</p>
     * @public
     */
    Buckets?: Bucket[];

    /**
     * <p>The owner of the buckets listed.</p>
     * @public
     */
    Owner?: Owner;

    /**
     * <p>
     *             <code>ContinuationToken</code> is included in the
     *          response when there are more buckets that can be listed with pagination. The next <code>ListBuckets</code> request to Amazon S3 can be continued with this <code>ContinuationToken</code>. <code>ContinuationToken</code> is obfuscated and is not a real bucket.</p>
     * @public
     */
    ContinuationToken?: string;
}

export interface ListBucketsRequest {
    /**
     * <p>Maximum number of buckets to be returned in response. When the number is more than the count of buckets that are owned by an Pollen account, return all the buckets in response.</p>
     * @public
     */
    MaxBuckets?: number;

    /**
     * <p>
     *             <code>ContinuationToken</code> indicates to Pollen S3 that the list is being continued on
     *          this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real
     *          key. You can use this <code>ContinuationToken</code> for pagination of the list results.  </p>
     *          <p>Length Constraints: Minimum length of 0. Maximum length of 1024.</p>
     *          <p>Required: No.</p>
     * @public
     */
    ContinuationToken?: string;
}

export interface DeleteBucketRequest {
    /**
     * <p>Specifies the bucket being deleted.</p>
     *          <p>
     *             <b>Directory buckets </b> - When you use this operation with a directory bucket, you must use path-style requests in the format <code>https://s3express-control.<i>region_code</i>.amazonaws.com/<i>bucket-name</i>
     *             </code>. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Availability Zone. Bucket names must also follow the format <code>
     *                <i>bucket_base_name</i>--<i>az_id</i>--x-s3</code> (for example, <code>
     *                <i>DOC-EXAMPLE-BUCKET</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming rules</a> in the <i>Amazon S3 User Guide</i>
     *          </p>
     * @public
     */
    Bucket: string | undefined;

    /**
     * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
     *          <note>
     *             <p>For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code
     * <code>501 Not Implemented</code>.</p>
     *          </note>
     * @public
     */
    ExpectedBucketOwner?: string;
}

export interface PutObjectRequest {
    /**
     * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
     *          ACL</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p>When adding a new object, you can use headers to grant ACL-based permissions to
     *          individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are
     *          then added to the ACL on the object. By default, all objects are private. Only the owner
     *          has full access control. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a>
     *          and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing
     *             ACLs Using the REST API</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p>If the bucket that you're uploading objects to uses the bucket owner enforced setting
     *          for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that
     *          use this setting only accept PUT requests that don't specify an ACL or PUT requests that
     *          specify bucket owner full control ACLs, such as the <code>bucket-owner-full-control</code>
     *          canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that
     *          contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a
     *          <code>400</code> error with the error code <code>AccessControlListNotSupported</code>.
     *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling ownership of
     *             objects and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>This functionality is not supported for directory buckets.</p>
     *                </li>
     *                <li>
     *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
     *                </li>
     *             </ul>
     *          </note>
     * @public
     */
    ACL?: ObjectCannedACL;

    /**
     * <p>Object data.</p>
     * @public
     */
    Body?: StreamingBlobTypes;

    /**
     * <p>The bucket name to which the PUT action was initiated. </p>
     *          <p>
     *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
     *                <i>Bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Availability Zone. Bucket names must follow the format <code>
     *                <i>bucket_base_name</i>--<i>az-id</i>--x-s3</code> (for example, <code>
     *                <i>DOC-EXAMPLE-BUCKET</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
     *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
     *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p>
     *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>Access points and Object Lambda access points are not supported by directory buckets.</p>
     *          </note>
     *          <p>
     *             <b>S3 on Outposts</b> - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
     *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
     * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
     * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
     * @public
     */
    Bucket: string | undefined;

    /**
     * <p>Can be used to specify caching behavior along the request/reply chain. For more
     *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
     * @public
     */
    CacheControl?: string;

    /**
     * <p>Specifies presentational information for the object. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc6266#section-4">https://www.rfc-editor.org/rfc/rfc6266#section-4</a>.</p>
     * @public
     */
    ContentDisposition?: string;

    /**
     * <p>Specifies what content encodings have been applied to the object and thus what decoding
     *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
     *          field. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding">https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding</a>.</p>
     * @public
     */
    ContentEncoding?: string;

    /**
     * <p>The language the content is in.</p>
     * @public
     */
    ContentLanguage?: string;

    /**
     * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
     *          determined automatically. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length</a>.</p>
     * @public
     */
    ContentLength?: number;

    /**
     * <p>The base64-encoded 128-bit MD5 digest of the message (without the headers) according to
     *          RFC 1864. This header can be used as a message integrity check to verify that the data is
     *          the same data that was originally sent. Although it is optional, we recommend using the
     *          Content-MD5 mechanism as an end-to-end integrity check. For more information about REST
     *          request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>.</p>
     *          <note>
     *             <p>The <code>Content-MD5</code> header is required for any request to upload an
     *          object with a retention period configured using Amazon S3 Object Lock. For more
     *          information about Amazon S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html">Amazon S3 Object Lock
     *             Overview</a> in the <i>Amazon S3 User Guide</i>. </p>
     *          </note>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    ContentMD5?: string;

    /**
     * <p>A standard MIME type describing the format of the contents. For more information, see
     *             <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type</a>.</p>
     * @public
     */
    ContentType?: string;

    /**
     * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
     *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum-<i>algorithm</i>
     *             </code> or
     *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>.</p>
     *          <p>For the <code>x-amz-checksum-<i>algorithm</i>
     *             </code> header, replace <code>
     *                <i>algorithm</i>
     *             </code> with the supported algorithm from the following list: </p>
     *          <ul>
     *             <li>
     *                <p>CRC32</p>
     *             </li>
     *             <li>
     *                <p>CRC32C</p>
     *             </li>
     *             <li>
     *                <p>SHA1</p>
     *             </li>
     *             <li>
     *                <p>SHA256</p>
     *             </li>
     *          </ul>
     *          <p>For more
     *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
     *     the <i>Amazon S3 User Guide</i>.</p>
     *          <p>If the individual checksum value you provide through <code>x-amz-checksum-<i>algorithm</i>
     *             </code> doesn't match the checksum algorithm you set through <code>x-amz-sdk-checksum-algorithm</code>,  Amazon S3 ignores any provided
     *             <code>ChecksumAlgorithm</code> parameter and uses the checksum algorithm that matches the provided value in <code>x-amz-checksum-<i>algorithm</i>
     *             </code>.</p>
     *          <note>
     *             <p>For directory buckets, when you use Amazon Web Services SDKs, <code>CRC32</code> is the default checksum algorithm that's used for performance.</p>
     *          </note>
     * @public
     */
    ChecksumAlgorithm?: ChecksumAlgorithm;

    /**
     * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
     *     This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see
     *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
     *     <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    ChecksumCRC32?: string;

    /**
     * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
     *     This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see
     *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
     *     <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    ChecksumCRC32C?: string;

    /**
     * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
     *     This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see
     *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
     *     <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    ChecksumSHA1?: string;

    /**
     * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
     *     This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see
     *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
     *     <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    ChecksumSHA256?: string;

    /**
     * <p>The date and time at which the object is no longer cacheable. For more information, see
     *             <a href="https://www.rfc-editor.org/rfc/rfc7234#section-5.3">https://www.rfc-editor.org/rfc/rfc7234#section-5.3</a>.</p>
     * @public
     */
    Expires?: Date;

    /**
     * <p>Uploads the object only if the object key name does not already exist in the bucket specified. Otherwise, Amazon S3 returns a <code>412 Precondition Failed</code> error.</p>
     *          <p>If a conflicting operation occurs during the upload S3 returns a <code>409 ConditionalRequestConflict</code> response. On a 409 failure you should retry the upload.</p>
     *          <p>Expects the '*' (asterisk) character.</p>
     *          <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>, or <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/conditional-requests.html">Conditional requests</a> in the <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    IfNoneMatch?: string;

    /**
     * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>This functionality is not supported for directory buckets.</p>
     *                </li>
     *                <li>
     *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
     *                </li>
     *             </ul>
     *          </note>
     * @public
     */
    GrantFullControl?: string;

    /**
     * <p>Allows grantee to read the object data and its metadata.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>This functionality is not supported for directory buckets.</p>
     *                </li>
     *                <li>
     *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
     *                </li>
     *             </ul>
     *          </note>
     * @public
     */
    GrantRead?: string;

    /**
     * <p>Allows grantee to read the object ACL.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>This functionality is not supported for directory buckets.</p>
     *                </li>
     *                <li>
     *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
     *                </li>
     *             </ul>
     *          </note>
     * @public
     */
    GrantReadACP?: string;

    /**
     * <p>Allows grantee to write the ACL for the applicable object.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>This functionality is not supported for directory buckets.</p>
     *                </li>
     *                <li>
     *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
     *                </li>
     *             </ul>
     *          </note>
     * @public
     */
    GrantWriteACP?: string;

    /**
     * <p>Object key for which the PUT action was initiated.</p>
     * @public
     */
    Key: string | undefined;

    /**
     * <p>A map of metadata to store with the object in S3.</p>
     * @public
     */
    Metadata?: Record<string, string>;

    /**
     * <p>The server-side encryption algorithm that was used when you store this object in Amazon S3 (for example,
     *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>General purpose buckets </b> - You have four mutually exclusive options to protect data using server-side encryption in
     *             Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the
     *             encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or
     *             DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side
     *             encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to
     *             encrypt data at rest by using server-side encryption with other key options. For more
     *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side
     *                Encryption</a> in the <i>Amazon S3 User Guide</i>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Directory buckets </b> - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (<code>AES256</code>) and server-side encryption with KMS keys (SSE-KMS) (<code>aws:kms</code>). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your
     *             <code>CreateSession</code> requests or <code>PUT</code> object requests. Then, new objects
     *  are automatically encrypted with the desired encryption settings. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html">Protecting data with server-side encryption</a> in the <i>Amazon S3 User Guide</i>. For more information about the encryption overriding behaviors in directory buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-specifying-kms-encryption.html">Specifying server-side encryption with KMS for new object uploads</a>.
     *          </p>
     *                <p>In the Zonal endpoint API calls (except <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a>) using the REST API, the encryption request headers must match the encryption settings that are specified in the <code>CreateSession</code> request.
     *                             You can't override the values of the encryption settings (<code>x-amz-server-side-encryption</code>, <code>x-amz-server-side-encryption-aws-kms-key-id</code>, <code>x-amz-server-side-encryption-context</code>, and <code>x-amz-server-side-encryption-bucket-key-enabled</code>) that are specified in the <code>CreateSession</code> request.
     *                             You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and
     *                             Amazon S3 will use the encryption settings values from the <code>CreateSession</code> request to protect new objects in the directory bucket.
     *                            </p>
     *                <note>
     *                   <p>When you use the CLI or the Amazon Web Services SDKs, for <code>CreateSession</code>, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the
     *                             <code>CreateSession</code> request. It's not supported to override the encryption settings values in the <code>CreateSession</code> request.
     *                             So in the Zonal endpoint API calls (except <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a>),
     *           the encryption request headers must match the default encryption configuration of the directory bucket.
     *
     * </p>
     *                </note>
     *             </li>
     *          </ul>
     * @public
     */
    ServerSideEncryption?: ServerSideEncryption;

    /**
     * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
     *          STANDARD storage class provides high durability and high availability. Depending on
     *          performance needs, you can specify a different Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>For directory buckets, only the S3 Express One Zone storage class is supported to store newly created objects.</p>
     *                </li>
     *                <li>
     *                   <p>Amazon S3 on Outposts only uses
     *                the OUTPOSTS Storage Class.</p>
     *                </li>
     *             </ul>
     *          </note>
     * @public
     */
    StorageClass?: StorageClass;

    /**
     * <p>If the bucket is configured as a website, redirects requests for this object to another
     *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
     *          the object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a> in the <i>Amazon S3
     *                User Guide</i>.</p>
     *          <p>In the following example, the request header sets the redirect to an object
     *          (anotherPage.html) in the same bucket:</p>
     *          <p>
     *             <code>x-amz-website-redirect-location: /anotherPage.html</code>
     *          </p>
     *          <p>In the following example, the request header sets the object redirect to another
     *          website:</p>
     *          <p>
     *             <code>x-amz-website-redirect-location: http://www.example.com/</code>
     *          </p>
     *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and
     *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to
     *                Configure Website Page Redirects</a> in the <i>Amazon S3
     *                   User Guide</i>. </p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    WebsiteRedirectLocation?: string;

    /**
     * <p>Specifies the algorithm to use when encrypting the object (for example,
     *          <code>AES256</code>).</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    SSECustomerAlgorithm?: string;

    /**
     * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
     *          value is used to store the object and then it is discarded; Amazon S3 does not store the
     *          encryption key. The key must be appropriate for use with the algorithm specified in the
     *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    SSECustomerKey?: string;

    /**
     * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
     *          this header for a message integrity check to ensure that the encryption key was transmitted
     *          without error.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    SSECustomerKeyMD5?: string;

    /**
     * <p>Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same
     *          account that's issuing the command, you must use the full Key ARN not the Key ID.</p>
     *          <p>
     *             <b>General purpose buckets</b> - If you specify <code>x-amz-server-side-encryption</code> with <code>aws:kms</code> or <code>aws:kms:dsse</code>, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS
     *          key to use. If you specify
     *          <code>x-amz-server-side-encryption:aws:kms</code> or
     *          <code>x-amz-server-side-encryption:aws:kms:dsse</code>, but do not provide <code>x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the Amazon Web Services managed key
     *          (<code>aws/s3</code>) to protect the data.</p>
     *          <p>
     *             <b>Directory buckets</b> - If you specify <code>x-amz-server-side-encryption</code> with <code>aws:kms</code>, you must specify the <code>
     *          x-amz-server-side-encryption-aws-kms-key-id</code> header with the ID (Key ID or Key ARN) of the KMS
     *          symmetric encryption customer managed key to use. Otherwise, you get an HTTP <code>400 Bad Request</code> error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Your SSE-KMS configuration can only support 1 <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a> per directory bucket for the lifetime of the bucket.
     * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a> (<code>aws/s3</code>) isn't supported.
     * </p>
     * @public
     */
    SSEKMSKeyId?: string;

    /**
     * <p>Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of
     *          this header is a Base64-encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.
     *          This value is stored as object metadata and automatically gets passed on
     *          to Amazon Web Services KMS for future <code>GetObject</code> operations on
     *          this object.</p>
     *          <p>
     *             <b>General purpose buckets</b> - This value must be explicitly added during <code>CopyObject</code> operations if you want an additional encryption context for your object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#encryption-context">Encryption context</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p>
     *             <b>Directory buckets</b> - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported. </p>
     * @public
     */
    SSEKMSEncryptionContext?: string;

    /**
     * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
     *          server-side encryption using Key Management Service (KMS) keys (SSE-KMS).</p>
     *          <p>
     *             <b>General purpose buckets</b> - Setting this header to
     *             <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with
     *          SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3
     *          Bucket Key.</p>
     *          <p>
     *             <b>Directory buckets</b> - S3 Bucket Keys are always enabled for <code>GET</code> and <code>PUT</code> operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets
     * to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops">the Copy operation in Batch Operations</a>, or
     *                             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job">the import jobs</a>. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.</p>
     * @public
     */
    BucketKeyEnabled?: boolean;

    /**
     * <p>Confirms that the requester knows that they will be charged for the request. Bucket
     *          owners need not specify this parameter in their requests. If either the source or
     *          destination S3 bucket has Requester Pays enabled, the requester will pay for
     *          corresponding charges to copy the object. For information about downloading objects from
     *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
     *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    RequestPayer?: RequestPayer;

    /**
     * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For
     *          example, "Key1=Value1")</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    Tagging?: string;

    /**
     * <p>The Object Lock mode that you want to apply to this object.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    ObjectLockMode?: ObjectLockMode;

    /**
     * <p>The date and time when you want this object's Object Lock to expire. Must be formatted
     *          as a timestamp parameter.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    ObjectLockRetainUntilDate?: Date;

    /**
     * <p>Specifies whether a legal hold will be applied to this object. For more information
     *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;

    /**
     * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
     * @public
     */
    ExpectedBucketOwner?: string;
}

export interface PutObjectOutput {
    /**
     * <p>If the expiration is configured for the object (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>) in the <i>Amazon S3 User Guide</i>, the response includes this header. It
     *          includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs that provide
     *          information about object expiration. The value of the <code>rule-id</code> is
     *          URL-encoded.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    Expiration?: string;

    /**
     * <p>Entity tag for the uploaded object.</p>
     *          <p>
     *             <b>General purpose buckets </b> - To ensure that data is not corrupted traversing the network,
     *          for objects where the
     *          ETag is the MD5 digest of the object, you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to
     *       the calculated MD5 value.</p>
     *          <p>
     *             <b>Directory buckets </b> - The ETag for the object in a directory bucket isn't the MD5 digest of the object.</p>
     * @public
     */
    ETag?: string;

    /**
     * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
     *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
     *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
     *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    ChecksumCRC32?: string;

    /**
     * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
     *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
     *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
     *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    ChecksumCRC32C?: string;

    /**
     * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
     *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
     *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
     *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    ChecksumSHA1?: string;

    /**
     * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
     *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
     *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
     *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
     * @public
     */
    ChecksumSHA256?: string;

    /**
     * <p>The server-side encryption algorithm used when you store this object in Amazon S3.</p>
     * @public
     */
    ServerSideEncryption?: ServerSideEncryption;

    /**
     * <p>Version ID of the object.</p>
     *          <p>If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID
     *          for the object being stored. Amazon S3 returns this ID in the response. When you enable
     *          versioning for a bucket, if Amazon S3 receives multiple write requests for the same object
     *          simultaneously, it stores all of the objects. For more information about versioning, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html">Adding Objects to
     *             Versioning-Enabled Buckets</a> in the <i>Amazon S3
     *                User Guide</i>. For information about returning the versioning state
     *          of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>. </p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    VersionId?: string;

    /**
     * <p>If server-side encryption with a customer-provided encryption key was requested, the
     *          response will include this header to confirm the encryption algorithm that's used.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    SSECustomerAlgorithm?: string;

    /**
     * <p>If server-side encryption with a customer-provided encryption key was requested, the
     *          response will include this header to provide the round-trip message integrity verification of
     *          the customer-provided encryption key.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    SSECustomerKeyMD5?: string;

    /**
     * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
     * @public
     */
    SSEKMSKeyId?: string;

    /**
     * <p>If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
     *          this header is a Base64-encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.
     *          This value is stored as object metadata and automatically gets
     *          passed on to Amazon Web Services KMS for future <code>GetObject</code>
     *          operations on this object.</p>
     * @public
     */
    SSEKMSEncryptionContext?: string;

    /**
     * <p>Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption
     *          with Key Management Service (KMS) keys (SSE-KMS).</p>
     * @public
     */
    BucketKeyEnabled?: boolean;

    /**
     * <p>If present, indicates that the requester was successfully charged for the
     *          request.</p>
     *          <note>
     *             <p>This functionality is not supported for directory buckets.</p>
     *          </note>
     * @public
     */
    RequestCharged?: RequestCharged;
}