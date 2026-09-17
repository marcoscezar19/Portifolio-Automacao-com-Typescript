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
    //Testar status code
        expect(res.status).toBe(201)
    //Testar se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados).toHaveProperty('id');
        expect(dados.title).toBe('Meu novo post');
        expect(dados.body).toBe('Conteúdo do meu novo post');
});

test('Metodo PUT para criar um novo post', async () =>{
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            id: 2,
            userId: 2,
            title: 'Meu antigo post',
            body: 'Conteúdo do meu antigo post'
        })
    });
    //Testar status code
        expect(res.status).toBe(200);
    //Testar se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados).toHaveProperty('id');
        expect(dados.title).toBe('Meu antigo post');
        expect(dados.body).toBe('Conteúdo do meu antigo post');
});

test('Metodo PATCH para atualizar um dado', async () =>{
    const res = await fetch(`${BASE_URL}/posts/2`, {
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            id: 3,
            userId: 3,
            title: 'NOSSO antigo post',
            body: 'Conteúdo do meu antigo post'
        })
    });
    //Testar status code
        expect(res.status).toBe(200);
    //Testar se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados).toHaveProperty('id');
        expect(dados.title).toBe('NOSSO antigo post');
        expect(dados.body).toBe('Conteúdo do meu antigo post');
});