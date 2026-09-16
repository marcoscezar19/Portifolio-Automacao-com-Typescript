//ARQUIVO DE TESTES UNITÁRIOS

import { buscarProdutos, aplicarDescontoSimulado } from "./atividadeImplementarExemplosPraticos.ts"

describe("Testes Unitários da Atividade", () => {

    test("Deve buscar a lista de produtos da API", async () => {
        const produtos = await buscarProdutos();

        expect(Array.isArray(produtos)).toBe(true);
        expect(produtos.length).toBeGreaterThan(0);
        expect(produtos[0]).toHaveProperty("price");
        
    });

    test("Deve aplicar 10% de desconto na promise simulada")
})