    function Button({ onClick, children, variant = 'primary', className = '' }) {
    const baseStyles = 'font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer'
    
    const variants = {
        primary: 'bg-[#4A4238] hover:bg-[#8B6F47] text-white',
        secondary: 'bg-[#ECDFCC] hover:bg-[#DED1B6] text-[#4A4238]',
        outline: 'border-2 border-[#4A4238] text-[#4A4238] hover:bg-[#4A4238] hover:text-white'
    }

    return (
        <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        >
        {children}
        </button>
    )
    }

    export default Button