import type { HttpClient } from "../types/httpclient.js";
export declare class Gateway {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    /**
     *
     * @returns Retorna o saldo da conta
     */
    balance(): Promise<any>;
}
//# sourceMappingURL=gateway.d.ts.map