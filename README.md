# VexoPay SDK

Essa é um SDK que facilita o uso da API da [VexoPay](https://vexopay.com.br/docs). 

Como instalar a lib?
Use:
```sh
npm i @vexopay/sdk
```

Como criar uma cobrança PIX?
```js
import { VexoPay } from "@vexopay/sdk"

const vexopay = new VexoPay("vx_cs_SUA_CHAVE_SECRET_AQUI", "vx_ci_SUA_CHAVE_ID_AQUI")

const cobrancapixteste = vexopay.pix.create(10.00, "João da Silva", "51523245400", "Cobrança teste")

cobrancapixteste // Retorna e cria a cobrança via PIX
```

A lib "@vexopay/sdk" foi permitida pela VexoPay ser enviada, feita e publicada como a lib OFICIAL da VexoPay. Qualquer outra lib que fale que é "oficial" ou que não é da organização "@vexopay" não é oficial.

Joaodacarrossa ©

VexoPay ©