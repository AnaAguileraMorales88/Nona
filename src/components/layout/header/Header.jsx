import { useNavigation } from '../../hooks/useNavigation'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import HamburgerButton from './HamburgerButton'

function Header() {
    const { isMenuOpen, menuItems, handleLinkClick, toggleMenu } = useNavigation()

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#ECDFCC] z-50">
            <section className="relative">
                <h1 className="text-[#4A4238] text-center py-4 md:py-3 pl-6 pr-16 md:px-6 text-lg md:text-2xl font-semibold tracking-widest uppercase leading-snug">
                    un cortometraje sobre la pertenencia
                </h1>
                <section className="md:hidden absolute right-3 top-1/2 -translate-y-1/2">
                    <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
                </section>
            </section>

            <nav aria-label="Navegación principal">
                <NavMenu menuItems={menuItems} onLinkClick={handleLinkClick} />
                <MobileMenu isOpen={isMenuOpen} menuItems={menuItems} onLinkClick={handleLinkClick} />
            </nav>
        </header>
    )
}

export default Header
