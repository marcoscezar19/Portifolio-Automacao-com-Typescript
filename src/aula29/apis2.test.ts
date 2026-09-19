import {test, expect} from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

//ESCREVENDO O TESTE:
test('Metodo POST para criar um novo post', async () =>{
    const res = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu novo post',
            body: 'Conteúdo do meu novo post'
        })
    });
    //Testar status code de criação
        expect(res.status).toBe(201)

    //Testar se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados).toHaveProperty('id');
        expect(dados.title).toBe('Meu novo post');
        expect(dados.body).toBe('Conteúdo do meu novo post');
});
//TESTAR MÉTODO PUT
test('Metodo PUT para atualizar um novo post', async () =>{
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            id: 1,
            userId: 1,
            title: 'MEU TÍTULO ATUALIZADO',
            body: 'Conteúdo do meu post atualizado'
        })
    });
    //Testar status code
        expect(res.status).toBe(200);

    //Testar se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados).toHaveProperty('id');
        expect(dados.title).toBe('MEU TÍTULO ATUALIZADO');
        expect(dados.body).toBe('Conteúdo do meu post atualizado');
});
//TESTAR MÉTODO PATCH
test('Metodo PATCH para atualizar um dado', async () =>{
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title: 'Título alterado via patch'
        })
    });
    //Testar status code
        expect(res.status).toBe(200);

    //Testar se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados).toHaveProperty('id');
        expect(dados.title).toBe('Título alterado via patch');

});

//Testar metodo delete
test('Metodo DELETE para DELETAR um POST', async () =>{
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'DELETE',
    });
    //Testar status code
        expect(res.status).toBe(200);
});
