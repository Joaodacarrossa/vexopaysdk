import type { CryptoCreateNetworkType } from "../types/crypto.js";
import type { HttpClient } from "../types/httpclient.js";
export declare class Crypto {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    /**
     *
     * @param amount Valor em reais da cobrança
     * @param network Qual a moeda da cobrança
     * @param description (OPCIONAL) Descrição da cobrança
     *
     * @returns Cria uma cobrança de CRYPTO
     */
    create(amount: number, network: CryptoCreateNetworkType, description?: string): Promise<any>;
    /**
     *
     * @param invoice_id ID da cobrança CRYPTO
     *
     * @returns Retorna o status de uma cobrança CRYPTO
     */
    status(invoice_id: string): Promise<any>;
    /**
     *
     * @returns Retorna as taxas do mercado CRYPTO da VexoPay
     */
    fees(): Promise<any>;
}
//# sourceMappingURL=crypto.d.ts.map