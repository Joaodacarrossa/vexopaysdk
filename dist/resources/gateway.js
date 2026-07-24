import { Routes } from "../types/routes.js";
export class Gateway {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     *
     * @returns Retorna o saldo da conta
     */
    balance() {
        return this.httpClient.get(Routes.gateway.balance);
    }
}
//# sourceMappingURL=gateway.js.map