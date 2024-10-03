/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types"

import { ListBucketsRequest, ListBucketsOutput } from "../models/models"
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient"

import { Command } from "../command.js"
import { Providers } from "../providers/providers";

export interface ListBucketsCommandInput extends ListBucketsRequest { }

export interface ListBucketsCommandOutput extends ListBucketsOutput, __MetadataBearer { }

export class ListBucketsCommand extends Command<
    ListBucketsCommandInput,
    ListBucketsCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: ListBucketsCommandInput;

    constructor(input?: ListBucketsCommandInput) {
        super();
        if (input) {
            this.input = input;
        } else {
            this.input = {};
        }
    }

    async resolve(providers: Providers): Promise<void> {
        const promiseList = providers.list.map(provider => provider.listBuckets())
        await Promise.all(promiseList)
    }
}