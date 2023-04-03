import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers"
import { Parser } from 'html-to-react'

export async function loader({params}) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    if( post.data.length === 0 ){
        throw new Response( '', {
            status: 404,
            statusText: 'Post No Encontrado'
        })
    }
    return post.data[0]
}

export function meta({data}) {
    if ( !data ){
        return {
            title: 'GuitarLA - Post No Encontrado',
            description: `Guitarras, venta de guitarras, Guitarra No Encontrada`
        }
    }
     
    return {
        title: `GuitarLA - ${data.vc_titulo}`,
        description: `Guitarras, venta de guitarras, ${data.vc_titulo}`
    }
}

const Post = () => {
    const post = useLoaderData()
    const { tx_contenido, vc_imagen, vc_titulo, dt_created_at } = post
    return (
        <article className="post mt-3">
            <img className="imagen" src={vc_imagen} alt={vc_titulo} />
            <div className="contenido">
                <h3>{vc_titulo}</h3>
                <p className="fecha">{formatearFecha(dt_created_at)}</p>
                <div className="texto">{Parser().parse(tx_contenido)}</div>
            </div>
        </article>
    )
}

export default Post
