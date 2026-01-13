    import { useNavigation } from '../../hooks/useNavigation'
    import NavMenu from './NavMenu'
    import MobileMenu from './MobileMenu'
    import HamburgerButton from './HamburgerButton'

    function Navbar() {
    const { isMenuOpen, menuItems, handleLinkClick, toggleMenu } = useNavigation()

    return (
        <nav className="fixed top-[40px] left-0 right-0 bg-[#ECDFCC] z-40">
        <NavMenu menuItems={menuItems} onLinkClick={handleLinkClick} />

        <section className="md:hidden flex justify-end items-center py-4 px-4">
            <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </section>

        <MobileMenu 
            isOpen={isMenuOpen} 
            menuItems={menuItems} 
            onLinkClick={handleLinkClick} 
        />
        </nav>
    )
    }

    export default Navbar