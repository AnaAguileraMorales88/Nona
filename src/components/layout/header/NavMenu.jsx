    import { Link } from 'react-router-dom'

    function NavMenu({ menuItems, onLinkClick }) {
    return (
        <ul className="hidden md:flex justify-center items-center gap-8 py-4 px-6">
        {menuItems.map((item) => (
            <li key={item.name}>
            <Link
                to={item.path}
                onClick={() => onLinkClick(item.path)}
                className="text-[#4A4238] font-medium text-sm tracking-wide
                        hover:text-[#8B6F47] hover:scale-110 
                        transition-all duration-300 ease-in-out"
            >
                {item.name}
            </Link>
            </li>
        ))}
        </ul>
    )
    }

    export default NavMenu