    import sinopsisImg from '../../assets/images/sinopsis.jpg'

    function SynopsisContent() {
    return (
        <section className="bg-[#FCFAEE] py-16 px-6">
        <article className="max-w-4xl mx-auto">
            <h2 className="text-[#4A4238] text-center text-2xl md:text-2xl font-bold mb-12 uppercase tracking-wide">
            Sinopsis
            </h2>

            <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <figure className="flex-shrink-0">
                <img
                src={sinopsisImg}
                alt="Imagen representativa de la sinopsis"
                className="w-full md:w-100 md:h-[450px] rounded-lg shadow-lg object-cover"
                />
            </figure>

            <aside className="flex-1">
                <p className="text-[#4A4238] text-justify text-base md:text-lg leading-relaxed">
                Tras 50 años de exilio, Nona recibe la noticia que siempre soñó:
                recuperar las tierras de su pueblo originario, el Jardal. Última
                descendiente de una Comunidad Indígena, Nona enfrenta el
                desafío de regresar a una tierra devastada, sin raíces ni memoria.
                Al otro lado del mundo, Eme, su nieta migrante en Barcelona,
                descubre que el sueño de un nuevo comienzo también guarda su
                propia desolación.
                Dos generaciones separadas por el tiempo, pero unidas en la
                misma búsqueda de identidad y pertenencia. Una historia donde el
                retorno no significa redención, sino confrontación con la memoria y
                el cambio.
                </p>
            </aside>
            </section>
        </article>
        </section>
    )
    }

    export default SynopsisContent