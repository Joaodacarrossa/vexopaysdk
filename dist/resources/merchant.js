import { Routes } from "../types/routes.js";
export class Merchant {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     *
     * @param pixKeyType Tipo da Chave PIX ("CPF", "CNPJ", "EMAIL", "TELEFONE", "CHAVE_ALEATORIA")
     * @param pixKey Chave PIX
     * @param amount Valor que será sacado via PIX
     * @param description (OPCIONAL) Descrição do saque
     *
     * @returns Saque via PIX
     */
    async cashoutPix(pixKeyType, pixKey, amount, description) {
        return this.httpClient.post(Routes.merchant.cashout, {
            withdrawalMethod: "PIX",
            amount: amount,
            pixKeyType: pixKeyType,
            pixKey: pixKey,
            description: description ? description : null
        });
    }
    /**
     *
     * @param targetAccount Conta da VexoPay selecionada
     * @param amount Quantidade do valor do saque via VexoPay
     * @param description (OPCIONAL) Descrição do saque via VexoPay
     *
     * @returns Saque via VexoPay
     */
    async cashoutInternal(targetAccount, amount, description) {
        return this.httpClient.post(Routes.merchant.cashout, {
            withdrawalMethod: "INTERNAL",
            amount: amount,
            targetAccount: targetAccount,
            description: description ? description : null
        });
    }
    /**
     *
     * @param wallet Conta CRYPTO selecionada
     * @param amount Quantidade do valor do saque via CRYPTO
     * @param description (OPCIONAL) Descrição do saque via CRYPTO
     *
     * @returns Saque via CRYPTO
     */
    async cashoutCrypto(wallet, amount, description) {
        return this.httpClient.post(Routes.merchant.cashout, {
            withdrawalMethod: "INTERNAL",
            amount: amount,
            wallet: wallet,
            description: description ? description : null
        });
    }
}
//# sourceMappingURL=merchant.js.map