// Formas de tipar
// Forma 1
let idade:number;
// Forma 2
const nome = 'Seu Zezo';
// Forma 3 não recomendado por ser redundante
const sobreNome:string = 'da Silva';
// Tipagens especiais 
// Objeto
type usuario = {'nick':string, 'age':number };
// Chamando type novo
let jogador:usuario = {nick: 'Ricardo', age:18};

let jogadorVelho:usuario = {nick:'Toin', age:76};

function verificarIdade(usuarioAtual: usuario){
    if (usuarioAtual.age>=21) {
        console.log(`✅ Acesso liberado: O jogador${usuarioAtual.nick} tem ${usuarioAtual.age} 
            anos e pode jogar nosso joguinho muito massa de pei pei.🔫!`);
    }else {
        console.log(`EI ${usuarioAtual.nick} É de menor, pode dar pei pei não. Só ${usuarioAtual.age} anos um bebê 👶`);
    }
};
verificarIdade(jogador);
verificarIdade(jogadorVelho);
// Para executar o código utilizamos o comando: "npx src" depois o local do arquivo.