/*Implementar exemplos práticos contendo:
Uso de arrays e objetos
Uma função assíncrona com async/await
Simulação de uma Promise
Explicar, em comentários, o fluxo assíncrono
Criação de Testes Unitários*/

const API_URL = "https://dummyjson.com" 
//1. USO DE ARRAYS E OBJETOS (Contrato de Tipos)

type produto = {
    id: number;
    title: string;
    price: number;
    category: string;
};

// 2. FUNÇÃO ASSÍNCRONA COM ASYNC/AWAIT
export async function buscarProdutos(): Promise<produto[]> {
    const res = await fetch(`${API_URL}/products`);
    const dados = await res.json();
    return dados.products;
};

// 3. SIMULAÇÃO DE UMA PROMISE MANUAL
export function aplicarDescontoSimulado(preco: number): Promise<number> {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(preco * 0.9); //apolica 10% de desconto após 500ms
        }, 500);
    }) 
}
/* 
 * 4. EXPLICAÇÃO DO FLUXO ASSÍNCRONO:
 * - A função 'executarFluxo' é marcada como 'async', permitindo o uso de 'await'.
 * - Ao executar 'await buscarProdutos()', o JavaScript faz a requisição de rede e 
 *   pausa a execução desta função sem travar a thread principal (Event Loop).
 * - Quando a API responde com os produtos, o Event Loop retoma a função de onde parou.
 * - Em seguida, 'await aplicarDescontoSimulado()' aguarda o temporizador de 500ms 
 *   da Promise ser resolvido para então calcular e exibir o preço final.
 */

export async function executarFluxo() {
    console.log("1. Buscando produtos na api..."); 
    const produtos = await buscarProdutos();

    const primeiroProduto = produtos[0];
    console.log("2. Calculando desconto simulado...");
    const precoComDesconto = await aplicarDescontoSimulado(primeiroProduto.price);

    console.log(`Preço final com desconto de 10%: ${precoComDesconto}`);
}

executarFluxo();