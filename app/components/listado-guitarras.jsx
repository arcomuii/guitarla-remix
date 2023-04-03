import Guitarra from "~/components/guitarra"

const ListadoGuitarras = ({guitarras}) => {
     return (
        <>
            <h2 className="heading">Nuestra Colleción</h2>
            {
                guitarras?.length && (
                    <div className='guitarras-grid'>
                        {
                            guitarras.map(guitarra => (
                                <Guitarra 
                                    key={guitarra?.vc_url}
                                    guitarra={guitarra}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default ListadoGuitarras
