import type { HttpClient } from "../types/httpclient.js";
export declare class Pix {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
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
    create(amount: number, payerName: string, payerDocument: number, description?: string): Promise<any>;
    /**
     * @param transcationid OD da cobrança via PIX
     *
     * @returns Retorna o status de uma cobrança via PIX
     */
    status(transactionId: string): Promise<any>;
}
//# sourceMappingURL=pix.d.ts.map