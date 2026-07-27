import { Routes } from "../types/routes.js";
export class Pix {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * AVISO - Os parâmetros `payerName` e `payerDocument` não precisam ser válidos, apenas irão ser mostrados no retorno como uma "identidade"
     *
     * @param amount Quantidade em reais da cobrança via PIX
     * @param payerName Nome do pagador da cobrança via PIX
     * @param payerDocument CPF do pagador da cobrança via PIX
     * @param description (OPCIONAL) Descrição da cobrança via PIX
     *
     * @returns Retorna e cria uma cobrança PIX
     */
    async create(amount, payerName, payerDocument, description) {
        return this.httpClient.post(Routes.gateway.pix_create, {
            amount: amount,
            payerName: payerName,
            payerDocument: payerDocument,
            description: description ? description : null
        });
    }
    /**
     * @param transcationid OD da cobrança via PIX
     *
     * @returns Retorna o status de uma cobrança via PIX
     */
    async status(transactionId) {
        return this.httpClient.get(Routes.gateway.pix_status(transactionId));
    }
}
//# sourceMappingURL=pix.js.map