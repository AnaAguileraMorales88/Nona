        import { useState, useEffect } from 'react'

        function Carousel({ images, autoPlayInterval = 3000, height = '500px' }) {
        const [currentIndex, setCurrentIndex] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
            }, autoPlayInterval)

            return () => clearInterval(interval)
        }, [images.length, autoPlayInterval])

        const goToPrevious = () => {
            setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
        }

        const goToNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }

        return (
    <figure className="relative max-w-5xl mx-auto">
    <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-[#DED1B6] p-3 rounded-full transition-all duration-300 z-10 cursor-pointer"
        aria-label="Imagen anterior"
    >
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M15 19l-7-7 7-7" />
        </svg>
    </button>

    <picture className="block w-full bg-[#FCFAEE]">
        <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt || `Imagen ${currentIndex + 1}`}
        className="w-full rounded-lg object-contain mx-auto"
        style={{ height }}
        />
    </picture>

    <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-[#4A4238] p-3 rounded-full transition-all duration-300 z-10 cursor-pointer"
        aria-label="Imagen siguiente"
    >
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
        )
        }

        export default Carousel