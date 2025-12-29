    import logo1 from '../../../assets/collaborators/clubnostalgia.jpg'
    import logo2 from '../../../assets/collaborators/labonnelogo.webp'
    import logo3 from '../../../assets/collaborators/logofonofox.png'
    import logo4 from '../../../assets/collaborators/logonou.png'

    function Collaborators() {
    return (
        <section className="max-w-6xl mx-auto">
        <h2 className="text-[#4A4238] text-center text-xl md:text-2xl font-light mb-8">
            con la colaboración de:
        </h2>
        
        <nav className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16" aria-label="Colaboradores">
            <img src={logo1} alt="Logo ClubNostalgia" className="w-32 h-16 md:w-40 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src={logo2} alt="Logo LaBonne" className="w-32 h-16 md:w-40 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src={logo3} alt="Logo Fonofox" className="w-32 h-16 md:w-40 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src={logo4} alt="Logo NouProdigi" className="w-32 h-16 md:w-40 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
        </nav>
        </section>
    )
    }

    export default Collaborators