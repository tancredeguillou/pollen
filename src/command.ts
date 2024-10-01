/**
 * Author: Tancrede Guillou
 */
import { $Command } from "@aws-sdk/client-s3";

import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ProviderType } from "./PollenClient"

export abstract class Command<
    Input extends ClientInput,
    Output extends ClientOutput,
    ClientInput extends object = any,
    ClientOutput extends __MetadataBearer = any
> {
    abstract input: Input;

    abstract resolve(providers: ProviderType[]): Promise<void>;
}