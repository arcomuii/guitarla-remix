import { Link } from '@remix-run/react'
import { formatearFecha } from '~/utils/helpers'
import { Parser } from 'html-to-react'

const Post = ({post}) => {
    const { tx_contenido, vc_imagen, vc_titulo, vc_url, dt_created_at }  = post
    return (
        <article className="post">
            <img className="imagen" src={vc_imagen} alt={vc_titulo} />
            <div className="contenido">
                <h3>{vc_titulo}</h3>
                <p className="fecha">{formatearFecha(dt_created_at)}</p>
                <div className="resumen">{Parser().parse(tx_contenido)}</div>
                <Link className="enlace" to={`/blog/${vc_url}`}>Leer entrada</Link>
            </div>
        </article>
    )
}

export default Post
