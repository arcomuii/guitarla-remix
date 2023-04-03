export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarla/tienda/guitar`)
    return await respuesta.json()
}

export async function getGuitarra(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarla/tienda/guitar/${url}`) 
    return await respuesta.json()
}