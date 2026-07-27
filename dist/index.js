import { Crypto } from "./resources/crypto.js";
import { Merchant } from "./resources/merchant.js";
import { Pix } from "./resources/pix.js";
import { HttpClient } from "./types/httpclient.js";
export class VexoPay {
    http;
    pix;
    crypto;
    merchant;
    /**
     * @param apiKey Chave secret da sua conta
     * @param idKey Chave ID da sua conta
     */
    constructor(apiKey, idKey) {
        this.http = new HttpClient(apiKey, idKey);
        this.pix = new Pix(this.http);
        this.crypto = new Crypto(this.http);
        this.merchant = new Merchant(this.http);
    }
}
//# sourceMappingURL=index.js.map