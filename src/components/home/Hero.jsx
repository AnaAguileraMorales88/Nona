import portada from '../../assets/images/portada.webp'

function Hero() {
    return (
        <section
            className="min-h-screen bg-cover bg-no-repeat bg-[position:25%_40%] md:bg-[position:center_40%] flex flex-col items-center justify-center pt-[20px] md:pt-[60px] relative"
            style={{ backgroundImage: `url(${portada})` }}
        >
            <h2 className="text-white text-4xl sm:text-6xl md:text-9xl font-bold tracking-wider mb-2 -mt-80 md:-mt-100 px-4">
                NONA
            </h2>
            <h3 className="text-white text-sm sm:text-base md:text-2xl font-semibold tracking-wide ml-10 md:ml-26 px-4">
                una película de Iki Moreno Villaseñor
            </h3>
        </section>
    )
}

export default Hero
