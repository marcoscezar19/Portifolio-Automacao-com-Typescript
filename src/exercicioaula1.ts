/*Crie um novo type com no minimo dois campos
chame varivaeis para utilizar esse type
crie uma função com esse type
nessa função utilize uma condicional ternaria
chame a função e execute*/

type produto = {'nome':string, 'preço':number};
let alimento1:produto = {nome:'Feijão Kicaldo' , preço:9.50};
let alimento2:produto = {nome:'Feijão marca menor' , preço:6.50};

function verificarValor(produtoAtual: produto){
   const mensagem = produtoAtual.preço < 9.50
   ? `✅ Produto em promoção: O produto ${produtoAtual.nome} está mais barato que o normal`
   : `O ${produtoAtual.nome} está com valor normal do mercado atual: ${produtoAtual.preço}`;
   console.log(mensagem);
};
verificarValor(alimento1);
verificarValor(alimento2);