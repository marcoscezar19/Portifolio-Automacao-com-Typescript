/*Crie um novo type com no minimo dois campos
chame varivaeis para utilizar esse type
crie uma função com esse type
nessa função utilize uma condicional ternaria
chame a função e execute*/

type produto = {'nome':string, 'preço':number};
let alimento1:produto = {nome:'Feijão Kicaldo' , preço:9.50};
let alimento2:produto = {nome:'Feijão marca menor' , preço:6.50};

function verificarValor(produtoAtual: produto){
    if (produtoAtual.preço<9.50) {
        console.log(`✅ Produto em promoção: O alimento ${produtoAtual.nome} está mais barato que o normal`);
    }else {
        console.log(`O ${produtoAtual.nome} esta com valor normal de mercado atual: ${produtoAtual.preço}`);
    }
};
verificarValor(alimento1);
verificarValor(alimento2);