/**
 * Author: Tancrede Guillou
 */

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