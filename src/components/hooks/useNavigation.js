    import { useState } from 'react'
    import { useLocation } from 'react-router-dom'

    export const useNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const menuItems = [
        { name: 'INICIO', path: '/' },
        { name: 'SOBRE NOSOTROS', path: '/about' },
        { name: 'MAKING-OFF', path: '/making-off' }
    ]

    const handleLinkClick = (path) => {
        if (location.pathname === path) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return {
        isMenuOpen,
        menuItems,
        handleLinkClick,
        toggleMenu
    }
    }