export async function getPosts() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarla/blog/post`)
    return await respuesta.json()
}

export async function getPost(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarla/blog/post/${url}`) 
    return await respuesta.json()
}