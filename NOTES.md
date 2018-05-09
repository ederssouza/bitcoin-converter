
## preferGlobal

Especifica como um autor do pacote npm pode designar um pacote como preferindo a instalação global (adicionando o par de valores-chave `"preferGlobal":` true ao arquivo package.json).

```json
// ...
"scripts": {
  // ...
},
"preferGlobal": true,
"bin": {
  "bitcoin-converter": "bin/main.js"
},
// ...
```
