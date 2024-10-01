/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeleteBucketRequest } from "../models/models";

import { Command } from "../command.js";
import { ProviderType, ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

export interface DeleteBucketCommandInput extends DeleteBucketRequest { }

export interface DeleteBucketCommandOutput extends __MetadataBearer { }

export class DeleteBucketCommand extends Command<
    DeleteBucketCommandInput,
    DeleteBucketCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: DeleteBucketCommandInput;

    constructor(input: DeleteBucketCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: ProviderType[]): Promise<void> {
        const bucketName = this.input.Bucket
        if (bucketName) {
            const promiseList = providers.map(provider => provider.deleteBucket(bucketName))
            await Promise.all(promiseList)
        }
    }

}