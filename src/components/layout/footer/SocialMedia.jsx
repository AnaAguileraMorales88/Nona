    import emailIcon from '../../../assets/iconos/correo.png'
    import whatsappIcon from '../../../assets/iconos/whatsapp.png'
    import instagramIcon from '../../../assets/iconos/instagram.png'

    function SocialMedia() {
    return (
        <section className="max-w-6xl mx-auto">
        <h3 className="text-[#4A4238] text-center text-base md:text-lg font-light tracking-widest uppercase mb-6">
            conecta con nosotros
        </h3>

        <nav className="flex justify-center items-center gap-6" aria-label="Redes sociales">
            <a href="mailto:contacto@nona.com" aria-label="Enviar email">
            <img src={emailIcon} alt="" className="h-8 md:h-10 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
            <img src={whatsappIcon} alt="" className="h-8 md:h-10 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
            <a href="https://instagram.com/nona" target="_blank" rel="noopener noreferrer" aria-label="Seguir en Instagram">
            <img src={instagramIcon} alt="" className="h-8 md:h-10 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
        </nav>
        </section>
    )
    }

    export default SocialMedia