/**
 * Author: Tancrede Guillou
 */

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