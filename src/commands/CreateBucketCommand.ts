/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CreateBucketRequest, CreateBucketOutput } from "../models/models"
import { ProviderType, ServiceInputTypes, ServiceOutputTypes } from "../PollenClient"

import { Command } from "../command.js";

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

    async resolve(providers: ProviderType[]): Promise<void> {
        const promiseList = providers.map(provider => provider.createBucket(this.input.Bucket))
        await Promise.all(promiseList)
    }
}