import { Routes } from "../types/routes.js";
export class Crypto {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     *
     * @param amount Valor em reais da cobrança
     * @param network Qual a moeda da cobrança
     * @param description (OPCIONAL) Descrição da cobrança
     *
     * @returns Cria uma cobrança de CRYPTO
     */
    async create(amount, network, description) {
        return this.httpClient.post(Routes.crypto.crypto_create, {
            amount: amount,
            network: network,
            description: description ? description : null
        });
    }
    /**
     *
     * @param invoice_id ID da cobrança CRYPTO
     *
     * @returns Retorna o status de uma cobrança CRYPTO
     */
    async status(invoice_id) {
        return this.httpClient.get(Routes.crypto.crypto_status(invoice_id));
    }
    /**
     *
     * @returns Retorna as taxas do mercado CRYPTO da VexoPay
     */
    async fees() {
        return this.httpClient.get(Routes.crypto.crypto_fees);
    }
}
//# sourceMappingURL=crypto.js.map