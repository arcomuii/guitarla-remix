import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader({params}) {
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)
    if( guitarra.data.length === 0 ){
        throw new Response( '', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }
    return guitarra.data[0]
}

export function meta({data}) {
    if ( !data ){
        return {
            title: 'GuitarLA - Guitarra No Encontrada',
            description: `Guitarras, venta de guitarras, Guitarra No Encontrada`
        }
    }
     
    return {
        title: `GuitarLA - ${data.vc_nombre}`,
        description: `Guitarras, venta de guitarras, ${data.vc_nombre}`
    }
}

const Guitarra = () => {
    const guitarra = useLoaderData()
    const { tx_descripcion, i_precio, vc_nombre, vc_imagen } = guitarra
    return (
        <div className="guitarra">
            <img className="imagen" src={vc_imagen} alt={vc_nombre} />
            <div className="contenido">
                <h3>{vc_nombre}</h3>
                <p className="text">{tx_descripcion}</p>
                <p className="precio">{i_precio}</p>

            </div>
        </div>
    )
}

export default Guitarra
