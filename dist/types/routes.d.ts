export declare const Routes: {
    gateway: {
        /**
         * POST - "https://vexopay.com.br/api/gateway/pix-create"
         */
        pix_create: string;
        /**
         * GET - "https://vexopay.com.br/gateway/pix-status?transacionId=vx_xxxx"
         */
        pix_status(transactionId: string): string;
        /**
         * GET - "https://vexopay.com.br/api/gateway/balance"
         */
        balance: string;
    };
    merchant: {
        /**
         * POST - "https://vexopay.com.br/api/merchant/cashout"
         */
        cashout: string;
    };
    crypto: {
        /**
         * POST - "https://vexopay.com.br/api/crypto-create"
         */
        crypto_create: string;
        /**
         * GET - "https://vexopay.com.br/api/gateway/crypto-status?id=invoice_id"
         */
        crypto_status(id: string): string;
        /**
         * GET - "https://vexopay.com.br/api/merchant/crypto-fees"
         */
        crypto_fees: string;
    };
};
//# sourceMappingURL=routes.d.ts.map