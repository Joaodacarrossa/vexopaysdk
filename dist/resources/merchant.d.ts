import type { HttpClient } from "../types/httpclient.js";
import type { PixKeyTypeType } from "../types/merchant.js";
export declare class Merchant {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    /**
     *
     * @param pixKeyType Tipo da Chave PIX ("CPF", "CNPJ", "EMAIL", "TELEFONE", "CHAVE_ALEATORIA")
     * @param pixKey Chave PIX
     * @param amount Valor que será sacado via PIX
     * @param description (OPCIONAL) Descrição do saque
     *
     * @returns Saque via PIX
     */
    cashoutPix(pixKeyType: PixKeyTypeType, pixKey: string, amount: number, description?: string): Promise<any>;
    /**
     *
     * @param targetAccount Conta da VexoPay selecionada
     * @param amount Quantidade do valor do saque via VexoPay
     * @param description (OPCIONAL) Descrição do saque via VexoPay
     *
     * @returns Saque via VexoPay
     */
    cashoutInternal(targetAccount: string, amount: number, description?: string): Promise<any>;
    /**
     *
     * @param wallet Conta CRYPTO selecionada
     * @param amount Quantidade do valor do saque via CRYPTO
     * @param description (OPCIONAL) Descrição do saque via CRYPTO
     *
     * @returns Saque via CRYPTO
     */
    cashoutCrypto(wallet: string, amount: number, description?: string): Promise<any>;
}
//# sourceMappingURL=merchant.d.ts.map