    import fixedImg1 from '../../assets/carousel/Luna.jpg'
    import fixedImg2 from '../../assets/carousel/nona.png'
    import Button from '../shared/Button'

    function StoryImages() {
    const scrollToCarousel = () => {
        const carouselSection = document.getElementById('gallery-carousel')
        if (carouselSection) {
        carouselSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section className="bg-[#FCFAEE] py-16 px-6">
        <article className="max-w-6xl mx-auto">
            <p className="text-[#4A4238] text-center text-lg md:text-2xl font-semibold mb-10 leading-relaxed px-4">
            Dos generaciones enfrentan la nostalgia y el deseo de pertenencia,<br className="hidden md:block" />
            descubriendo que el hogar es más que un lugar.
            </p>

            <section className="flex flex-col md:flex-row gap-6 mb-8">
            <figure className="flex-1">
                <img
                src={fixedImg1}
                alt="Luna en escena del cortometraje"
                className="w-full h-[300px] md:h-[500px] rounded-lg shadow-lg object-cover"
                />
            </figure>
            <figure className="flex-1">
                <img
                src={fixedImg2}
                alt="Nona en escena del cortometraje"
                className="w-full h-[300px] md:h-[500px] rounded-lg shadow-lg object-cover"
                />
            </figure>
            </section>

            <section className="text-center">
            <Button onClick={scrollToCarousel} variant="primary">
                Ver más imágenes →
            </Button>
            </section>
        </article>
        </section>
    )
    }

    export default StoryImages