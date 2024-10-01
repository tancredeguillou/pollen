/**
 * Author: Tancrede Guillou
 */
import { $Command } from "@aws-sdk/client-s3";

import { ProviderType } from "./PollenClient"

export abstract class Command<
    Input extends ClientInput,
    Output extends ClientOutput,
    ClientInput extends object = any,
    ClientOutput extends object = any
> {
    abstract input: Input;

    abstract resolve(providers: ProviderType[]): Promise<void>;
}