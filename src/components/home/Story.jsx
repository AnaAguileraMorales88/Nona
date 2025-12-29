    import { useState, useEffect } from 'react'
    import image1 from '../../assets/carousel/nona.png'
    import image2 from '../../assets/carousel/Luna.jpg'
    import image3 from '../../assets/carousel/Nona2.png'
    import image4 from '../../assets/carousel/Luna3.jpg'
    import image5 from '../../assets/carousel/Nona3.png'
    import image6 from '../../assets/carousel/Nona4.png'

    function Story() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [image1, image2, image3, image4, image5, image6]

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [images.length])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    return (
        <section className="bg-[#DED1B6] py-16 px-6">
        <article className="max-w-6xl mx-auto">
            <p className="text-[#4A4238] text-center text-lg md:text-xl font-light mb-12 leading-relaxed px-4">
            Dos generaciones enfrentan la nostalgia y el deseo de pertenencia,<br className="hidden md:block" />
            descubriendo que el hogar es más que un lugar.
            </p>

            <figure className="relative max-w-5xl mx-auto">
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-[#4A4238] p-3 rounded-full transition-all duration-300 z-10"
                aria-label="Imagen anterior"
            >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <picture className="block w-full">
                <img
                src={images[currentIndex]}
                alt={`Imagen ${currentIndex + 1} de la historia`}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                />
            </picture>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-[#4A4238] p-3 rounded-full transition-all duration-300 z-10"
                aria-label="Imagen siguiente"
            >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <nav className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" aria-label="Indicadores del carrusel">
                {images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                    aria-current={index === currentIndex}
                />
                ))}
            </nav>
            </figure>
        </article>
        </section>
    )
    }

    export default Story