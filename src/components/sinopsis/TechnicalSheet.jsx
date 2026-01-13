import fichaImg from '../../assets/images/manos.png'

function TechnicalSheet() {
    const technicalData = [
        { label: 'Título original', value: 'NONA' },
        { label: 'Duración', value: '9 min 27 s' },
        { label: 'País de producción', value: 'México / España' },
        { label: 'Año de producción', value: '2025' },
        { label: 'Género', value: 'Drama' },
        { label: 'Idioma original', value: 'Español' },
        { label: 'Dirección', value: 'Itzel Moreno Villaseñor' },
        { label: 'Guion', value: 'Itzel Moreno Villaseñor' },
        { label: 'Producción', value: 'Club Nostalgia Estudio / Itzel Moreno Villaseñor' },
        { label: 'Fotografía', value: 'Mario Arturo Amaro, Ivan Limanowksy' },
        { label: 'Diseño sonoro', value: 'Adán Latonda' },
        { label: 'Música original', value: 'Jorge Garabito' },
        { label: 'Reparto', value: 'Regina Flores Ribot y Luna Camile' }
    ]

    return (
        <section className="bg-[#FCFAEE] py-8 md:py-16 px-6">
            <article className="max-w-6xl mx-auto">
                <h2 className="text-[#4A4238] text-center text-xl md:text-2xl font-bold mb-8 md:mb-12 uppercase tracking-wide border-b-2 border-[#4A4238] pb-4">
                    Ficha Técnica
                </h2>

                <section className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
                    <figure className="flex-shrink-0 w-full md:w-auto">
                        <img
                            src={fichaImg}
                            alt="Imagen representativa del cortometraje NONA"
                            className="w-full md:w-[400px] md:h-[500px] rounded-lg shadow-lg object-cover"
                        />
                    </figure>

                    <dl className="flex-1 grid grid-cols-1 gap-2 md:gap-3 text-[#4A4238] w-full">
                        {technicalData.map((item, index) => (
                            <section key={index} className="flex flex-col md:flex-row gap-1 md:gap-2">
                                <dt className="font-bold text-xs md:text-base uppercase tracking-wide">
                                    {item.label}:
                                </dt>
                                <dd className="text-xs md:text-base leading-relaxed">
                                    {item.value}
                                </dd>
                            </section>
                        ))}
                    </dl>
                </section>
            </article>
        </section>
    )
}

export default TechnicalSheet