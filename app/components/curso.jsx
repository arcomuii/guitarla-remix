const Curso = ({curso}) => {
    const { vc_titulo, tx_contenido, vc_imagen } = curso
    return (
        <section className="curso">
            <style jsx="true">{`
                .curso {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${vc_imagen});
                }
            `}</style>
            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{vc_titulo}</h2>
                    <p className="texto">{tx_contenido}</p>
                </div>
            </div>
        </section>
    )
}

export default Curso
