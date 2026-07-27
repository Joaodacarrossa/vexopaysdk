# VexoPay SDK
[![Versão do NPM](https://img.shields.io/npm/v/@vexopay/sdk.svg)](https://npmjs.org/@vexopay/sdk)

## Pré-requisitos
- Versão do Node.js **MAIOR OU IGUAL À** `20.0.0`
- Conta ativa na [VexoPay](https://vexopay.com.br/)

## Recursos
- Criar cobranças PIX
- Criar cobranças CRYPTO
- Verificar status das cobranças (ambos os tipos)
- E muito mais!

## Segurança
- **NUNCA** coloque suas credenciais (Chave Secret, Chave ID) no **front-end**, sempre coloque num arquivo `.env` ou em um lugar seguro fora do front-end!

> [!INFO]
> O SDK usa a [documentação oficial da VexoPay](httos://vexopay.com.br/docs) para fazer requisições, valores, entre outros.

Para instalar o SDK use 
```bash
npm i @vexopay/sdk
```

Como criar uma cobrança PIX
```ts
import {VexoPay} from "@vexopay/sdk"

const vxpay = new VexoPay("vx_cs_SEU_SECRET_AQUI", "vx_ci_SEU_OD_AQUI")

const cobranca = await vxpay.pix.create(10.00, "João da Silva", 51211916599, "Teste") //Valor, nome do pagador, CPF do pagador, descrição da cobrança (OPCIONAL)

console.log(cobranca) // Mostra a resposta da API em JSON.
```

> [!WARNING]
> Os valores `payer_name` (nome do pagador) e `payer_document` (CPF do pagador) não precisam ser verídicos e/ou válidos!

Esse é um SDK **OFICIAL** da VexoPay.