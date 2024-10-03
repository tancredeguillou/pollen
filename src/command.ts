/**
 * Author: Tancrede Guillou
 */
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { Providers } from "./providers/providers";

export abstract class Command<
    Input extends ClientInput,
    Output extends ClientOutput,
    ClientInput extends object = any,
    ClientOutput extends __MetadataBearer = any
> {
    abstract input: Input;

    abstract resolve(providers: Providers): Promise<void>;
}