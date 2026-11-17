import { NavLink } from 'react-router-dom'

function MobileMenu({ isOpen, menuItems, onLinkClick }) {
    return (
        <div
            id="mobile-menu"
            className={`md:hidden grid bg-[#ECDFCC] transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
            inert={!isOpen}
        >
            <ul className="overflow-hidden">
                {menuItems.map((item) => (
                    <li key={item.name} className="border-t border-[#4A4238]/10">
                        <NavLink
                            to={item.path}
                            end
                            onClick={() => onLinkClick(item.path)}
                            className={({ isActive }) =>
                                `block text-center text-sm tracking-[0.2em] py-4 transition-colors duration-300 hover:text-[#8B6F47] ${
                                    isActive ? 'text-[#8B6F47] font-semibold' : 'text-[#4A4238] font-medium'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenu
