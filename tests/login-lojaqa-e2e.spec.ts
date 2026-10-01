import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';
// test.describe() funciona como um bloco de testes
test.describe('ATO 1 - Validar carregamento e visibilidade de elementos', async () => {
    test('Validar título e carregamento da pagina', async ({ page }) => {

        // navegar até a pagina de login
        await page.goto(`${BASE_URL}/login.html`);

        // validar título
        await expect(page).toHaveTitle(/LojaQA | Entrar/i);

    });
    test('Verificar exibição dos campos do formulário de login', async ({ page }) => {

        // navegar até a pagina de login
        await page.goto(`${BASE_URL}/login.html`);

        // validar campos
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();

        // verificar botão de login desativado antes do preenchimento de dados de login
        await expect(page.locator('#loginBtn')).toBeDisabled();

    });

});

test.describe('ATO 2 - Caminho feliz', async () => {
    test('Validar acesso e redirecionar ao painel', async ({ page }) => {
        // navegar até a pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        // Preencher campos utilizando o fill()
        await page.fill('#email', 'marckin@gmail.com');
        await page.fill('#password', '123456789');
        // validar botão ativo
        await expect(page.locator('#loginBtn')).toBeEnabled();
        // Acao de clique no btn
        await page.click('#loginBtn');
        // Validar redirecionamento para a pagina /painel
        await expect(page).toHaveURL(/painel\.html/);
    })
})
test('verificar botão login desativado quando email incorreto)', async({page}) => {
//navegar até a pagina de login
    await page.goto(`${BASE_URL}/login.html`)

    //preencher campos utilizando o fill()
    await page.fill('#email','email_sem_formato');
    await page.fill('#password','123456789');
    // validar botão ativo
        await expect(page.locator('#loginBtn')).toBeDisabled();    
    })

// criar bloco de test ato 3 para criar usuário de cliente e lojista e validar o formulario de cadastro e o login de cada um deles
test.describe('Ato 3 - Entrar na pagina de criar usuário e validar campos', () => {

    test('Criar usuário cliente validar campos', async ({ page }) => {
        // navegar até a pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        await page.getByRole('link', { name: 'Criar conta' }).click();

        // validar campos
        await expect(page.locator('#reg-name')).toBeVisible();
        await expect(page.locator('#reg-email')).toBeVisible();
        await expect(page.locator('#reg-password')).toBeVisible();
        await expect(page.locator('#reg-role')).toBeVisible();
        await expect(page.locator('#registerBtn')).toBeVisible();

        // preencher campos utilizando o fill() criando usuário cliente
        await page.fill('#reg-name', 'Maicão do QA');
        await page.fill('#reg-email', 'maicaodoqa@gmail.com');
        await page.fill('#reg-password', '123456789');
        await page.getByLabel('QUERO ME CADASTRAR COMO').selectOption({ label: 'Cliente' });
        await page.click('#registerBtn');

        // Validar Login do Cliente
        await page.goto(`${BASE_URL}/login.html`);
        await page.fill('#login-email', 'maicaodoqa@gmail.com');
        await page.fill('#login-password', '123456789');
        await page.click('#loginBtn');
    });

    test('Criar usuário Lojista e validar campos', async ({ page }) => {
        // navegar até a pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        await page.getByRole('link', { name: 'Criar conta' }).click();

        // selecionar opção de lojista
        await page.getByLabel('QUERO ME CADASTRAR COMO').selectOption({ label: 'Lojista / vendedor' });

        // validar campos
        await expect(page.locator('#reg-name')).toBeVisible();
        await expect(page.locator('#reg-email')).toBeVisible();
        await expect(page.locator('#reg-password')).toBeVisible();
        await expect(page.locator('#reg-role')).toBeVisible();
        await expect(page.locator('#reg-store-name')).toBeVisible();
        await expect(page.locator('#registerBtn')).toBeVisible();

        // preencher campos utilizando o fill() criando usuário lojista
        await page.fill('#reg-name', 'Maria Auxiliadora');
        await page.fill('#reg-email', 'mariaauxiliadora@gmail.com');
        await page.fill('#reg-password', '123456789');
        await page.getByLabel('QUERO ME CADASTRAR COMO').selectOption({ label: 'Lojista / vendedor' });
        await page.fill('#reg-store-name', 'A melhor do Brasil!');
        await page.click('#registerBtn');

        // Validar Login do Lojista
        await page.goto(`${BASE_URL}/login.html`);
        await page.fill('#login-email', 'mariaauxiliadora@gmail.com');
        await page.fill('#login-password', '123456789');
        await page.click('#loginBtn');
    });
    
});