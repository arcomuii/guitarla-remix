export async function getCurso() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarla/promos/promos`)
    return await respuesta.json()
}