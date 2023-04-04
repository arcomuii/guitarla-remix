import { useLoaderData, useOutletContext } from "@remix-run/react"
import { useState } from "react"
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
    const { agregarCarrito } = useOutletContext()
    const [ cantidad, setCantidad ] = useState(0)
    const guitarra = useLoaderData()
    const { tx_descripcion, i_precio, vc_nombre, vc_imagen } = guitarra

    const handleSubmit = e => {
        e.preventDefault()
        if(cantidad < 1) {
            alert("La cantidad debe ser mayor a 0")
            return
        }

        const guitarraSelleccionada = {
            id: guitarra.id,
            imagen: guitarra.vc_imagen,
            nombre: guitarra.vc_nombre,
            precio: guitarra.i_precio,
            cantidad
        }
        agregarCarrito(guitarraSelleccionada)
    }

    return (
        <div className="guitarra">
            <img className="imagen" src={vc_imagen} alt={vc_nombre} />
            <div className="contenido">
                <h3>{vc_nombre}</h3>
                <p className="text">{tx_descripcion}</p>
                <p className="precio">{i_precio}</p>

                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="cantidad">Cantidad</label>
                    <select 
                        onChange={ e => setCantidad(+e.target.value) } 
                        id="cantidad"
                    >
                        <option value="0">--Seleccione--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Agregar al carrito" />
                </form>
            </div>
        </div>
    )
}

export default Guitarra
