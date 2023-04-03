import { Link } from "@remix-run/react";

const Guitarra = ({guitarra}) => {
    const { i_precio, vc_nombre, tx_descripcion, vc_url, vc_imagen } = guitarra;
    return (
        <div className="guitarra">
            <img src={vc_imagen} alt={vc_nombre} />
            <div className="contenido">
                <h3>{vc_nombre}</h3>
                <p className="descripcion">{tx_descripcion}</p>
                <p className="precio">{i_precio}</p>
                <Link className="enlace" to={`/guitarras/${vc_url}`}>Ver Producto</Link>
            </div>
        </div>
    )
}

export default Guitarra
