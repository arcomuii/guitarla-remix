import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from "~/models/guitarras.server"
import ListadoGuitarras from '~/components/listado-guitarras'

export function meta() {
    return (
        {
            title: 'Guitar LA - Tienda de guitarras',
            meta: 'Nuestra colección de guitarrass'
        }
    )
}

export async function loader() {
    const guitarras = await getGuitarras()
    return guitarras.data
}

const Tienda = () => {
    const guitarras = useLoaderData()
    return (
        <ListadoGuitarras guitarras={guitarras} />
    )
}

export default Tienda
