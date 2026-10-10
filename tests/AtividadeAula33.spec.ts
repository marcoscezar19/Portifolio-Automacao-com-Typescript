import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('Aula 33 - Atividade desafio prático localizadores', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(`${BASE_URL}/login.html`);
        await expect(page).toHaveTitle(/LojaQA | Entrar/i);
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeDisabled();
    });

    test('Validar acesso com login de administrador', async ({ page }) => {
        await page.fill('#email', 'admin@system.com');
        await page.fill('#password', 'AdminPassword123');
        await expect(page.locator('#loginBtn')).toBeEnabled();
        
        await Promise.all([
            page.waitForURL(/painel\.html/),
            page.click('#loginBtn')
        ]);
        
        await expect(page).toHaveURL(/painel\.html/);
    });

    test('CT 1 - Localizar e clicar no filtro de usuário e identificar algum usuário', async ({ page }) => {
        await page.fill('#email', 'admin@system.com');
        await page.fill('#password', 'AdminPassword123');
        await Promise.all([
            page.waitForURL(/painel\.html/),
            page.click('#loginBtn')
        ]);

        const botaoUsuarios = page.getByRole('button', { name: /Usuários/i });
        await expect(botaoUsuarios).toBeVisible();
        await botaoUsuarios.click();

        const cardUsuario = page.locator('#adminUsersList article').filter({ hasText: 'admin@system.com' });
        await expect(cardUsuario).toBeVisible();
        await expect(cardUsuario).toContainText('Administrador');
    });

    test('CT 2 - Localizar e clicar no filtro de produtos', async ({ page }) => {
        await page.fill('#email', 'admin@system.com');
        await page.fill('#password', 'AdminPassword123');
        await Promise.all([
            page.waitForURL(/painel\.html/),
            page.click('#loginBtn')
        ]);

        const abaProdutos = page.locator('button.admin-tab[data-tab="products"]');
        await expect(abaProdutos).toBeVisible();
        await abaProdutos.click();
        await expect(abaProdutos).toHaveClass(/active/);

        const cardProduto = page.locator('#adminProductsList article').filter({ hasText: 'Mouse Óptico Atlas' });
        await expect(cardProduto).toBeVisible();
        await expect(cardProduto).toContainText('PRD-31503');
    });

    test('CT 3 - Localizar e clicar no filtro de lojas', async ({ page }) => {
        await page.fill('#email', 'admin@system.com');
        await page.fill('#password', 'AdminPassword123');
        await Promise.all([
            page.waitForURL(/painel\.html/),
            page.click('#loginBtn')
        ]);

        const abaLojas = page.locator('button.admin-tab[data-tab="stores"]');
        await expect(abaLojas).toBeVisible();
        await abaLojas.click();
        await expect(abaLojas).toHaveClass(/active/);

        const cardLoja = page.locator('#adminStoresList article').filter({ hasText: 'Vitrine Tech' });
        await expect(cardLoja).toBeVisible();

        const inputNomeLoja = cardLoja.locator('input[data-field="storeName"]');
        await expect(inputNomeLoja).toHaveValue('Vitrine Tech');
    });

});