import { Crypto } from "./resources/crypto.js";
import { Merchant } from "./resources/merchant.js";
import { Pix } from "./resources/pix.js";
export declare class VexoPay {
    private readonly http;
    readonly pix: Pix;
    readonly crypto: Crypto;
    readonly merchant: Merchant;
    /**
     * @param apiKey Chave secret da sua conta
     * @param idKey Chave ID da sua conta
     */
    constructor(apiKey: string, idKey: string);
}
//# sourceMappingURL=index.d.ts.map