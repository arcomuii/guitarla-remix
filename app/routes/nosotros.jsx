import ImageNosotros from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles

        },
        {
            rel: 'preload',
            href: ImageNosotros,
            as: 'image'
        }
    ]
}

export function meta() {
    return (
        {
            title: 'Guitar LA - Sobre Nosotros',
            meta: 'Venta de guitarras y más'
        }
    )
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nuestro Negocio</h2>
            <div className="contenido">
                <img src={ImageNosotros} alt="Nosotros" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque aut eaque aspernatur, vitae ea deleniti esse id error consectetur aliquam iusto, aperiam dolorum rerum odio facere ipsam, quidem laboriosam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil porro assumenda nisi dolorem obcaecati harum est animi? Vitae officiis doloribus consectetur rem? Ab laborum ratione harum dolorum! Odit, facere.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros