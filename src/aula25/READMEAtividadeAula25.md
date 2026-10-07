# Documentação de Decisão de Automação & Pirâmide de Testes

**Sistema Analisado:** Plataforma de E-commerce Web / Mobile

---

## 1. Matriz de Decisão de Automação (8 Cenários)

| ID | Cenário de Teste | Decisão | Justificativa |
| :--- | :--- | :--- | :--- |
| **01** | Autenticação de usuário com e-mail e senha válidos | **Automatizar** | Cenário crítico de caminho feliz, com altíssima frequência de execução em todas as regressões. |
| **02** | Validação de cálculo de frete por faixa de CEP na API | **Automatizar** | Regra de negócio pura, determinística e ideal para execução rápida na camada de serviço/API. |
| **03** | Teste de usabilidade e layout responsivo de novo banner na Home | **Não Automatizar** | Avaliação subjetiva de design/UX com alta taxa de mudança visual, gerando falso-positivos na automação. |
| **04** | Processamento de pagamento via Cartão de Crédito (API) | **Automatizar** | Fluxo crítico de receita com contrato de API estável e dados de entrada parametrizáveis. |
| **05** | Teste exploratório de usabilidade na primeira compra de idosos | **Não Automatizar** | Requer percepção humana e adaptação contextual em tempo real, inviável para scripts rígidos. |
| **06** | Validação de campos obrigatórios do formulário de cadastro | **Automatizar** | Teste de limite e validação simples, de execução repetitiva e ideal para automação de UI/Componente. |
| **07** | Verificação pontual de texto ortográfico após atualização de marketing | **Não Automatizar** | Demanda baixa de repetição e alteração ad-hoc de conteúdo que não compensa o custo de escrita do script. |
| **08** | Recuperação de senha via envio de token por e-mail | **Automatizar** | Fluxo integrado crítico e recorrente que garante a continuidade de acesso dos usuários. |

---

## 2. Pirâmide de Testes do Sistema

        /\
       /  \     [ UI / Ponta a Ponta (E2E) ]
      /    \    ~ 10% dos testes
     /------\
    /        \   [ Integração / Serviço / API ]
   /          \  ~ 30% dos testes
  /------------\
 /              \ [ Unidade / Componente ]
/________________\ ~ 60% dos testes

### Nível 1: Testes de Unidade (Base da Pirâmide)
* **Conceito:** Testam funções, métodos ou classes de forma isolada do restante do sistema, sem dependências externas (banco de dados, rede).
* **Exemplo de Cenário:** Testar a função `calcularDescontoCupom(valorTotal, codigoCupom)` para garantir que um cupom de 10% deduza o valor correto sem falhar em arredondamentos numéricos.

### Nível 2: Testes de Integração / API (Meio da Pirâmide)
* **Conceito:** Validam a comunicação e os contratos entre diferentes módulos, serviços ou banco de dados.
* **Exemplo de Cenário:** Enviar uma requisição `POST /api/v1/checkout` com dados de um pedido e verificar se o status HTTP retornado é `201 Created` e se a transação foi registrada corretamente no banco de dados.

### Nível 3: Testes de UI / E2E (Topo da Pirâmide)
* **Conceito:** Simulam a jornada completa do usuário final interagindo com a interface gráfica no navegador ou app móvel.
* **Exemplo de Cenário:** Utilizar o Playwright para abrir o navegador, realizar o login, buscar um produto, adicionar ao carrinho, preencher o endereço e finalizar a compra visualizando a tela de confirmação.