import {test, expect} from '@playwright/test';
/**
 * ==============================================================
 * desafio pratico localizadores acessar pagina de painel
 * ==============================================================
 * etapa de beforeEach para acessar a pagina de login
 * 1. acessar a pagina de login
 * 2. logar na tela de login com usuário e senha validos de aministrador
 * 3. acessar a pagina de painel
 * CT 1. localizar e clicar no filtro de usuário e identificar algum usuário na lista de usuários
 * CT 2. localizar e clicar no filtro de produtos e indentificar algum produto na lista de usuários
 * CT 3. localizar e clicar no filtro de lojas e identificar o título do nome da loja na lista de lojas e ver localizar as informações da loja. * 
 */
const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login'

test.describe('Aula 33 - Atividade desafio prático localizadores acessar pagina painel', () => {

    test.beforeEach(async ({ page}) =>{
// acessar aplicação de prática
        await page.goto(`${BASE_URL}/login.html`);
    await expect(page).toHaveTitle(/LojaQA | Entrar/i);
// Válidar campos
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#loginBtn')).toBeVisible();
//verificar se btn esta desativado
    await expect(page.locator('#loginBtn')).toBeDisabled();

    });
});

test.describe('Logar no sistema como administrador', () => {
    test('Validar acesso',async({page})=>{
    await page.goto(`${BASE_URL}/login.html`)
    // preencher campoos utilizando o fill()
    await page.fill('#email','admin@system.com');
    await page.fill('#password', 'AdminPassword123');
    //Validar botao ativo
    await expect(page.locator('#loginBtn')).toBeEnabled();
    // Acao de clique no btn
    await page.click('#loginBtn');
    //validar o redirecioamento para a pagina /painel
    await expect(page).toHaveURL(/painel\.html/);
    })
})
test.describe('Localizar e clicar no filtro de usuário e identificar algum usuário na lista de usuários',async ({page}) =>{
// Clicar no botão/filtro de Usuários
    const botaoUsuarios = page.getByRole('button', { name: /Usuários/i });
    await expect(botaoUsuarios).toBeVisible();
    await botaoUsuarios.click();

// Identificar um usuário na lista (ex: Administrador)
    const cardUsuario = page.locator('#adminUsersList article').filter({ hasText: 'admin@system.com' });
    await expect(cardUsuario).toBeVisible();
    await expect(cardUsuario).toContainText('Administrador');

    test('CT 2 - Localizar e clicar no filtro de produtos e identificar algum produto na lista', async ({ page }) => {
  // 1. Localizar e clicar na aba de Produtos usando data-tab="products"
  const abaProdutos = page.locator('button.admin-tab[data-tab="products"]');
  await expect(abaProdutos).toBeVisible();
  await abaProdutos.click();

  // 2. Identificar um produto na lista
  const listaProdutos = page.locator('#adminProductsList, .products-list, article').first();
  await expect(listaProdutos).toBeVisible();
});

// CT 3. Localizar e clicar no filtro de lojas e identificar o título do nome da loja na lista de lojas e localizar as informações da loja.
test('CT 3 - Localizar e clicar no filtro de lojas e identificar informações da loja', async ({ page }) => {
  // 1. Localizar e clicar no filtro/aba de Lojas
  const abaLojas = page.locator('button.admin-tab[data-tab="stores"]');
  await expect(abaLojas).toBeVisible();
  await abaLojas.click();

  // 2. Identificar a loja "Vitrine Tech" na lista
  const cardLoja = page.locator('article, .store-card, div').filter({ hasText: 'Vitrine Tech' }).first();
  await expect(cardLoja).toBeVisible();

  // 3. Clicar no card para expandir as informações (caso não esteja aberto)
  await cardLoja.click();

  // 4. Localizar e validar as informações da loja
  const inputNomeLoja = page.locator('input[value="Vitrine Tech"]');
  const inputEmail = page.locator('input[value="lojista@system.com"]');
  const secaoProdutos = page.getByText('Produtos Cadastrados desta Loja');

  await expect(inputNomeLoja).toBeVisible();
  await expect(inputEmail).toBeVisible();
  await expect(secaoProdutos).toBeVisible();
});
})