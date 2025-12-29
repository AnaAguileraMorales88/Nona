    import portada from '../../assets/images/portada.png'

    function Hero() {
    return (
        <section 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-[81px] md:pt-[100px]"
        style={{ backgroundImage: `url(${portada})` }}
        >
        <h2 className="text-white text-7xl sm:text-8xl md:text-9xl font-bold tracking-wider mb-4 -mt-16 md:-mt-20">
            NONA
        </h2>
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light tracking-wide ml-12 md:ml-16">
            una película de Iki Moreno Villaseñor
        </h3>
        </section>
    )
    }

    export default Hero