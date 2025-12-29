    import { useState } from 'react'
    import { Link } from 'react-router-dom'

    function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { name: 'INICIO', path: '/' },
        { name: 'SINOPSIS', path: '/sinopsis' },
        { name: 'TEASER', path: '/teaser' },
        { name: 'MAKING-OFF', path: '/making-off' },
        { name: 'CRÉDITOS', path: '/creditos' }
    ]

    return (
        <nav className="fixed top-[37px] md:top-[44px] left-0 right-0 bg-[#FAEED1] z-40">
        <ul className="hidden md:flex justify-center items-center gap-8 py-4 px-6">
            {menuItems.map((item) => (
            <li key={item.name}>
                <Link
                to={item.path}
                className="text-[#4A4238] font-medium text-sm tracking-wide
                        hover:text-[#8B6F47] hover:scale-110 
                        transition-all duration-300 ease-in-out"
                >
                {item.name}
                </Link>
            </li>
            ))}
        </ul>

        <section className="md:hidden flex justify-end items-center py-3 px-4">
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#4A4238] p-2 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] rounded"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            >
            <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
            </button>
        </section>

        {isMenuOpen && (
            <ul className="md:hidden bg-[#FAEED1]">
            {menuItems.map((item) => (
                <li key={item.name}>
                <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[#4A4238] font-medium text-sm tracking-wide
                            py-3 px-6 hover:bg-[#D4CFC2] hover:text-[#8B6F47]
                            transition-all duration-300"
                >
                    {item.name}
                </Link>
                </li>
            ))}
            </ul>
        )}
        </nav>
    )
    }

    export default Navbar