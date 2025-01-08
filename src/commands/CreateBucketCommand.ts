/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CreateBucketRequest, CreateBucketOutput } from "../models/models.js"
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient.js"

import { Command } from "../command.js";
import { Providers } from "../providers/providers.js";

export interface CreateBucketCommandInput extends CreateBucketRequest { }

export interface CreateBucketCommandOutput extends CreateBucketOutput, __MetadataBearer { }

export class CreateBucketCommand extends Command<
    CreateBucketCommandInput,
    CreateBucketCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: CreateBucketCommandInput;

    constructor(input: CreateBucketCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        const promiseList = providers.list.map(provider => provider.createBucket(this.input.Bucket))
        await Promise.all(promiseList)
    }
}