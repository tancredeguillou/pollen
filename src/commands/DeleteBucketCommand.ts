/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeleteBucketRequest } from "../models/models";

import { Command } from "../command.js";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";
import { Providers } from "../providers/providers";

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

    async resolve(providers: Providers): Promise<void> {
        const bucketName = this.input.Bucket
        if (bucketName) {
            const promiseList = providers.list.map(provider => provider.deleteBucket(bucketName))
            await Promise.all(promiseList)
        }
    }

}