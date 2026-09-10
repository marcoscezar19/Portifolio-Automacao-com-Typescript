//IMPORTANDO DEPENDÊNCIAS
import{test, expect, vi} from 'vitest';
//SIMULANDO LOGIN LENTO
function loginLento(usuario:string):Proimise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`BEM-VINDO, ${usuario}!`);
        },5000);
    })
}

test('Simular login usando fake timers ',async ()=>{
    //LIGANDO A MAQUINA DO TEMPO HAHAHA!
    vi.useFakeTimers();
    console.log('⏳INICIANDO CENÁRIO DE TESTE ;D');

    //CHAMANDO PRIMISE DE USUÁRIO SEM AWAIT AINDA
    const promessaLogin = loginLento('Papaleguas');

    //CONFIGURAR AVANÇO DE 5 SEGUNDOS
    vi.advanceTimersByTime(5000);
    
    const resultado = await promessaLogin;

    //VERIFICAR RESULTADO
    expect(resultado).toBe('BEM-VINDO, Papaleguas!')

    console.log('Sucesso! Teste realizado na velocidade da luz 💡');

    //DESLIGANDO A MAQUINA DO TEMPO
    vi.useRealTimers();
})