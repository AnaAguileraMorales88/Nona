    import { Link } from 'react-router-dom'

    function MobileMenu({ isOpen, menuItems, onLinkClick }) {
    if (!isOpen) return null

    return (
        <ul className="md:hidden bg-[#FAEED1]">
        {menuItems.map((item) => (
            <li key={item.name}>
            <Link
                to={item.path}
                onClick={() => onLinkClick(item.path)}
                className="block text-[#4A4238] font-medium text-sm tracking-wide
                        py-3 px-6 hover:bg-[#D4CFC2] hover:text-[#8B6F47]
                        transition-all duration-300"
            >
                {item.name}
            </Link>
            </li>
        ))}
        </ul>
    )
    }

    export default MobileMenu