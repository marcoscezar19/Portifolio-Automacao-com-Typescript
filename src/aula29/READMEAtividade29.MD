# Documento Técnico: Métodos HTTP, Status Codes e Testes de Integração

Este documento apresenta uma análise dos métodos de atualização e remoção em APIs REST (`PUT`, `PATCH` e `DELETE`), os principais códigos de status HTTP, estruturas de payload JSON e a implementação de testes de integração automatizados utilizando **Vitest** e a API pública **JSONPlaceholder**.

---

## 1. Diferença entre PUT, PATCH e DELETE

* **`PUT` (Substituição Total):**
  * **Finalidade:** Atualizar um recurso existente de forma **completa**.
  * **Comportamento:** Substitui todo o objeto do recurso pelos dados enviados no corpo (*body*) da requisição. Se algum campo for omitido no envio, ele poderá ser apagado ou substituído por `null` no servidor.
  * **Idempotência:** É **idempotente** (executar a mesma requisição 1 ou 100 vezes gera exatamente o mesmo estado no servidor).

* **`PATCH` (Atualização Parcial):**
  * **Finalidade:** Atualizar um recurso de forma **parcial**.
  * **Comportamento:** Modifica apenas os campos informados na requisição, mantendo os demais dados inalterados no servidor.
  * **Idempotência:** Nem sempre é idempotente, mas na maioria dos casos práticos é utilizado para alterações pontuais de atributos.

* **`DELETE` (Remoção):**
  * **Finalidade:** **Remover** um recurso do servidor por meio do seu identificador/ID.
  * **Comportamento:** Não necessita de envio de corpo (*body*). Se o recurso existir, ele é excluído.
  * **Idempotência:** É **idempotente** (chamar o DELETE do mesmo ID várias vezes garante que o recurso continuará não existindo, embora respostas subsequentes possam retornar `404 Not Found`).

---

## 2. Principais Status Codes e seus Significados

### Sucesso (2xx)
* **`200 OK`:** A requisição foi processada com sucesso (comum em `GET`, `PUT`, `PATCH` e `DELETE`).
* **`201 Created`:** Um novo recurso foi criado com sucesso no servidor (resposta padrão para `POST`).
* **`204 No Content`:** A requisição foi processada com sucesso, mas não há conteúdo para retornar no corpo da resposta (comum em `DELETE`).

### Erros do Cliente (4xx)
* **`400 Bad Request`:** A requisição possui sintaxe inválida ou dados incorretos no payload enviado pelo cliente.
* **`401 Unauthorized`:** O cliente precisa se autenticar para obter a resposta solicitada.
* **`403 Forbidden`:** O cliente não tem direitos de acesso ao recurso, mesmo estando autenticado.
* **`404 Not Found`:** O recurso solicitado não foi encontrado no servidor.

### Erros do Servidor (5xx)
* **`500 Internal Server Error`:** O servidor encontrou uma situação inesperada e não sabe como tratar a requisição.

---

## 3. Exemplo de Payload JSON Bem Estruturado

Exemplo de um payload em formato JSON para a criação/atualização completa de uma entidade de postagem:

```json
{
  "userId": 1,
  "title": "Aprendendo Testes de Integração de API",
  "body": "Neste post abordamos os conceitos de POST, PUT, PATCH e DELETE utilizando Vitest."
}
```
## 4. Criação de Testes de Integração (Vitest)

Abaixo estão os testes de integração automatizados desenvolvidos utilizando Vitest:

```typescript
import { test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// 1. Teste do Método POST (Criação)
test('Método POST para criar um novo post', async () => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: 1,
      title: 'Meu novo post',
      body: 'Conteúdo do meu novo post'
    })
  });

  // Validar status code de criação
  expect(res.status).toBe(201);

  // Validar o retorno do JSON
  const dados = await res.json();
  expect(dados).toHaveProperty('id');
  expect(dados.title).toBe('Meu novo post');
  expect(dados.body).toBe('Conteúdo do meu novo post');
});

// 2. Teste do Método PUT (Atualização Completa)
test('Método PUT para atualizar um post existente', async () => {
  const res = await fetch(`${BASE_URL}/posts/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      userId: 1,
      title: 'MEU TÍTULO ATUALIZADO',
      body: 'Conteúdo do meu post atualizado'
    })
  });

  // Validar status code
  expect(res.status).toBe(200);

  // Validar se os dados enviados foram atualizados corretamente
  const dados = await res.json();
  expect(dados).toHaveProperty('id');
  expect(dados.title).toBe('MEU TÍTULO ATUALIZADO');
  expect(dados.body).toBe('Conteúdo do meu post atualizado');
});

// 3. Teste do Método PATCH (Atualização Parcial)
test('Método PATCH para atualizar parcialmente um post', async () => {
  const res = await fetch(`${BASE_URL}/posts/1`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Título alterado via PATCH'
    })
  });

  // Validar status code
  expect(res.status).toBe(200);

  // Validar atualização do atributo enviado
  const dados = await res.json();
  expect(dados).toHaveProperty('id');
  expect(dados.title).toBe('Título alterado via PATCH');
});

// 4. Teste do Método DELETE (Exclusão)
test('Método DELETE para deletar um post', async () => {
  const res = await fetch(`${BASE_URL}/posts/1`, {
    method: 'DELETE'
  });

  // Validar status code de remoção bem-sucedida
  expect(res.status).toBe(200);
});
```