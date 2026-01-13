import itzelImg from '../../assets/images/Itzel.jpg'
import reginaImg from '../../assets/carousel/nona.png'
import lunaImg from '../../assets/carousel/luna3.jpg'

function Team() {
    const teamMembers = [
        {
            name: 'Iki Moreno Villaseñor',
            role: 'Directora, guionista y productora',
            description: 'Realizadora de teatro y cine originaria de la Ciudad de México. Su obra se caracteriza por un enfoque social y poético que busca visibilizar realidades invisibilizadas y generar empatía hacia comunidades y grupos vulnerables. Con formación en actuación (Casa del Teatro, CasAzul), comunicación y escritura creativa, ha transitado por artes escénicas, cine documental y experimental. Ha dirigido piezas sobre maternidad, migración y memoria, y con NONA firma su proyecto más personal y ambicioso hasta la fecha.',
            image: itzelImg,
            alt: 'Fotografía de Iki Moreno Villaseñor, directora y guionista'
        },
        {
            name: 'Regina Flores Ribot',
            role: 'Actriz (Nona)',
            description: 'Reconocida actriz mexicana de teatro, cine y televisión. Su trayectoria incluye papeles en Las niñas bien, Uzi, La casa de las flores y Amarres. Con amplia experiencia en escenarios y cámaras, aporta a NONA una presencia luminosa y comprometida, ideal para dar vida a un personaje atravesado por la memoria y el exilio.',
            image: reginaImg,
            alt: 'Fotografía de Regina Flores Ribot, actriz principal'
        },
        {
            name: 'Luna Camille',
            role: 'Actriz (Eme)',
            description: 'Fotógrafa y cineasta emergente formada en Barcelona. Su acercamiento a la interpretación es fresco y auténtico, con un interés genuino por las historias de migración y memoria. Su participación aporta una mirada íntima y personal que dialoga con la sensibilidad de la película.',
            image: lunaImg,
            alt: 'Fotografía de Luna Camille, actriz'
        }
    ]

    return (
        <section className="bg-[#FCFAEE] pt-32 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                <p className="text-[#4A4238] text-justify md:text-center text-lg md:text-xl font-semibold mb-12 leading-relaxed px-4">
                    NONA es un proyecto impulsado principalmente por mujeres creadoras, unidas por el deseo de contar historias con sensibilidad social y poética.
                </p>

                <section className="space-y-14">
                    {teamMembers.map((member, index) => (
                        <article
                            key={index}
                            className="flex flex-col md:flex-row gap-10 items-start"
                        >
                            <figure className="w-full md:w-1/5 flex-shrink-2">
                                <img
                                    src={member.image}
                                    alt={member.alt}
                                    className="w-[600px] h-[300px] object-cover rounded-lg shadow-lg"
                                />
                            </figure>
                            <aside className="w-full md:w-4/6">
                                <h3 className="text-[#4A4238] text-xl md:text-2xl font-bold mb-2">
                                    {member.name}
                                </h3>
                                <h4 className="text-[#4A4238] text-lg md:text-lg font-semibold mb-2 italic">
                                    {member.role}
                                </h4>
                                <p className="text-[#4A4238] text-justify text-base md:text-lg leading-relaxed">
                                    {member.description}
                                </p>
                            </aside>
                        </article>
                    ))}
                </section>
            </article>
        </section>
    )
}

export default Team