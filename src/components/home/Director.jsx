import directoraImg from '../../assets/images/Itzel.jpg'

function Director() {
    return (
        <section className="bg-[#DED1B6] py-16 px-6">
            <article className="max-w-5xl mx-auto">
                <h2 className="text-[#4A4238] text-center text-xl md:text-xl font-bold mb-10 uppercase tracking-wide">
                    Directora
                </h2>

                <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
                    <aside className="max-w-xl text-[#4A4238] text-justify space-y-4">
                        <p className="leading-relaxed">
                            Itzel Moreno Villaseñor es una creadora audiovisual de la Ciudad de México con nacionalidad española. Estudió Arte Dramático y Comunicación Audiovisual, además de guion cinematográfico en Barcelona, donde se especializó en dirección de fotografía. Fundó la compañía de teatro "Saliendo del Huacal" y dirigió obras presentadas en festivales internacionales. En 2017 se mudó a Barcelona para enfocarse en el guion cinematográfico y desarrolló su proyecto más ambicioso, NONA, un <strong>cortometraje</strong> sobre el desarraigo de indígenas en México. Gracias a una residencia en LaBonne Centro Cultural, obtuvo apoyo para coproducir el proyecto con Fonofox y Nou Prodigi. Actualmente está en postproducción. Además de directora y guionista, ha trabajado como actriz y productora creativa. Su enfoque artístico busca amplificar las voces de comunidades marginadas y generar conciencia social a través del cine, mientras continúa su formación en crítica cinematográfica y documental creativo.
                        </p>

                        <a
                            href="https://vimeo.com/directora"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-blue-600 hover:text-blue-800 underline transition-colors duration-300"
                        >
                            Link en Vimeo
                        </a>
                    </aside>

                    <figure className="flex-shrink-0">
                        <img
                            src={directoraImg}
                            alt="Itzel Moreno Villaseñor, directora"
                            className="w-64 md:w-72 h-auto rounded-lg shadow-lg object-cover"
                        />
                    </figure>
                </section>
            </article>
        </section>
    )
}

export default Director
