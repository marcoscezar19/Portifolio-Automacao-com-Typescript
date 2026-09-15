const BASE_URL = 'https://jsonplaceholder.typicode.com';
//Definindo contratos de tipos
type Post = {
    userId:number;
    id?: number; //campo opcional
    title: string;
    body: string;
};
type Coment ={
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

//GET /posts
async function listarPost(){
    console.log(`--- 1. GET /posts ---`);
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`Lidos ${dados.length} posts. Ex: do primeiro:`,dados[0].title);
}

// GET /posts/1

async function buscarPorId(id:number) {
    console.log(`--- 2. GET /posts/1 ---`);
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const dados: Post = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`Título do post ${id}:`, dados.title);
}

// GET /post/1/comment
async function listarComent(postId:number){
    console.log(`--- 3. GET /posts/1/comment ---`);
    const res = await fetch(`${BASE_URL}/posts/${postId}/comment`);
    const dados: Coment[] = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentários Ex: Email do primeiro comentário.`, dados[0].email);
}
async function chamarReqs(){
    listarPost();
    buscarPorId(3);
}
chamarReqs();