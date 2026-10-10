# Guia de Bolso: Localizadores no Playwright & TypeScript

## 1. A Ordem de Prioridade no DevTools (F12)
Sempre que olhar para o HTML, procure os elementos nesta ordem de segurança:
* **Atributos customizados (`data-tab`, `data-field`, `data-testid`)** -> Os mais seguros e criados para testes.
* **Textos visíveis / Papéis (`getByRole`, `getByText`)** -> Simulando a visão do usuário.
* **IDs únicos (`id="..."`)** -> Muito rápidos, mas cuidado se mudarem dinamicamente.
* **Seletores CSS compostos** -> Último recurso.

---

## 2. A Regra de Ouro dos Atributos `data-*`
* Sempre que usar um atributo `data-*`, **obrigatoriamente coloque-o entre colchetes `[]`**.
* *Exemplo:*
```typescript
page.locator('[data-tab="stores"]')

---

## 3. O Superpoder: Combinar a Tag com o Atributo
Para deixar o seu seletor ultra-específico e resistente a mudanças de layout, junte a tag HTML com o atributo sem espaço entre eles:

Sintaxe: [TagHTML][Atributo="valor"]

Exemplos práticos:

```typescript

// Garante que é estritamente um botão que possui esse atributo data-tab
page.locator('button[data-tab="products"]')

// Combinando Tag + Classe + Atributo (o nível máximo de precisão!)
page.locator('button.admin-tab[data-tab="stores"]')

```
---

## 4. A Regra de Ouro: Espaço vs. Sem Espaço
Com espaço ( ): Significa "dentro de" (hierarquia/descendente).

Exemplo: page.locator('#adminStoresList article') -> "Procura por tags <article> que estão dentro do container #adminStoresList".

Sem espaço (tag[atributo]): Significa "o próprio elemento é..." (especificação direta).

Exemplo: page.locator('input[data-field="storeName"]') -> "O próprio input que tem aquele atributo".