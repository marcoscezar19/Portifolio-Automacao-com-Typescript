//IMPORTANDO DEPENDÊNCIAS
import{test, expect, vi} from 'vitest';
//SIMULANDO LOGIN LENTO
function loginLento(usuario:string):Proimise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`BEM VINDO, ${usuario}!`);
        },5000);
    })
}
