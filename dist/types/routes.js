export const Routes = {
    gateway: {
        /**
         * POST - "https://vexopay.com.br/api/gateway/pix-create"
         */
        pix_create: "/gateway/pix-create",
        /**
         * GET - "https://vexopay.com.br/gateway/pix-status?transacionId=vx_xxxx"
         */
        pix_status(transactionId) {
            return "/gateway/pix-status?transactionId=" + transactionId;
        },
        /**
         * GET - "https://vexopay.com.br/api/gateway/balance"
         */
        balance: "/gateway/balance"
    },
    merchant: {
        /**
         * POST - "https://vexopay.com.br/api/merchant/cashout"
         */
        cashout: "/merchant/cashout",
    },
    crypto: {
        /**
         * POST - "https://vexopay.com.br/api/crypto-create"
         */
        crypto_create: "/gateway/crypto_create",
        /**
         * GET - "https://vexopay.com.br/api/gateway/crypto-status?id=invoice_id"
         */
        crypto_status(id) {
            return "/gateway/crypto-status?id=" + id;
        },
        /**
         * GET - "https://vexopay.com.br/api/merchant/crypto-fees"
         */
        crypto_fees: "/merchant/crypto-fees"
    }
};
//# sourceMappingURL=routes.js.map