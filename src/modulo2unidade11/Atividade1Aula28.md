# Documento Técnico: Mapeamento do Contrato de Integração (API Reqres)

Este documento apresenta a análise técnica e o mapeamento de contrato de endpoints da API pública Reqres, preparando os cenários para a etapa posterior de automação de testes de API.

---

## 1. Endpoint de Leitura: Buscar Usuário por ID (GET)

### 1.1 Identificação e Finalidade
* **Endpoint / Rota:** `/api/users/2`
* **Objetivo de Negócio:** Consultar e retornar os dados cadastrais detalhados de um determinado usuário existente no sistema através do seu identificador único (ID).

### 1.2 Estrutura do Request (O que o cliente envia)
* **Método HTTP:** `GET`
* **URL Completa:** `https://reqres.in/api/users/2`
* **Headers (Cabeçalhos):**
  * `Accept`: `application/json`
* **Body (Corpo):** N/A (Não se aplica para requisições GET)

### 1.3 Estrutura do Response (O que o servidor devolve)
* **Status Code Esperado:** `200 OK`
* **Payload de Retorno (Exemplo Real):**

```json
{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "[https://reqres.in/img/faces/2-image.jpg](https://reqres.in/img/faces/2-image.jpg)"
  },
  "support": {
    "url": "[https://reqres.in/#support-heading](https://reqres.in/#support-heading)",
    "text": "To keep ReqRes free, donations are appreciated!"
  }
}
```
## 2. Endpoint de Criação: Cadastrar Novo Usuário (POST)
### 2.1 Identificação e Finalidade
* **Endpoint / Rota: /api/users

* **Objetivo de Negócio: Permitir a inclusão de um novo perfil de usuário no sistema, gerando um ID único e o registro da data/hora de criação (createdAt).

### 2.2 Estrutura do Request (O que o cliente envia)
* **Método HTTP: POST

* **URL Completa: https://reqres.in/api/users

* **Headers (Cabeçalhos):

* **Content-Type: application/json

* **Accept: application/json

* **Body (Corpo):

```json
{
  "name": "Josemir Silva",
  "job": "QA Engineer"
}
```

### 2.3 Estrutura do Response (O que o servidor devolve)
* **Status Code Esperado: 201 Created

* **Payload de Retorno (Exemplo Real):
```json
{
  "name": "Josemir Silva",
  "job": "QA Engineer",
  "id": "784",
  "createdAt": "2026-09-18T22:15:00.000Z"
}
```