/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { PutObjectRequest, PutObjectOutput } from "../models/models";
import { ServiceInputTypes, ServiceOutputTypes } from "../PollenClient";

import { Command } from "../command.js";
import { mpcSplitData } from "../mpc/mpc.js";
import { Providers } from "../providers/providers";

export interface PutObjectCommandInput extends Omit<PutObjectRequest, "Body"> {
    Body?: StreamingBlobPayloadInputTypes;
}

export interface PutObjectCommandOutput extends PutObjectOutput, __MetadataBearer { }

export class PutObjectCommand extends Command<
    PutObjectCommandInput,
    PutObjectCommandOutput,
    ServiceInputTypes,
    ServiceOutputTypes
> {
    input: PutObjectCommandInput;

    constructor(input: PutObjectCommandInput) {
        super();
        this.input = input;
    }

    async resolve(providers: Providers): Promise<void> {
        if (!this.input.Body) throw new Error('Body not found.');
        // TODO - toString() is not the right way to handle this.
        const shares = mpcSplitData(this.input.Body.toString());
        // Iterate over the shares array and call putObject() for each share
        const promiseList = shares.map((share, index) => {
            const provider = providers.list[index % providers.list.length];
            return provider.putObject(this.input.Bucket, this.input.Key, share);
        });
        await Promise.all(promiseList)
    }
}