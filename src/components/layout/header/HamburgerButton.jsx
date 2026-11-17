function HamburgerButton({ isOpen, onClick }) {
    const line = 'block h-0.5 w-6 rounded-full bg-[#4A4238] transition-all duration-300 ease-in-out'

    return (
        <button
            type="button"
            onClick={onClick}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#DED1B6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6F47]"
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
        >
            <span className={`${line} ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`${line} ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`${line} ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
    )
}

export default HamburgerButton
