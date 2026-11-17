import portada from '../../assets/images/portada.webp'

function Hero() {
    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
    }

    return (
        <section
            className="relative min-h-screen overflow-hidden bg-cover bg-no-repeat bg-[position:25%_40%] md:bg-[position:center_40%] flex flex-col items-center justify-start pt-[24vh] md:pt-[20vh]"
            style={{ backgroundImage: `url(${portada})` }}
        >
            {/* Capa degradada para dar contraste al texto sin oscurecer toda la foto */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/50"
                aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center text-center px-4 hero-fade-in">
                <h2 className="text-white text-4xl sm:text-6xl md:text-9xl font-bold tracking-wider mb-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
                    NONA
                </h2>
                <span className="block h-px w-16 md:w-24 bg-white/70 my-3 md:my-5" aria-hidden="true" />
                <h3 className="text-white/95 text-sm sm:text-base md:text-2xl font-semibold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    una película de Iki Moreno Villaseñor
                </h3>
            </div>

            <button
                type="button"
                onClick={scrollDown}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm bg-white/10 hover:bg-white/25 transition-colors duration-300 cursor-pointer hero-bounce"
                aria-label="Bajar al contenido"
            >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
        </section>
    )
}

export default Hero
