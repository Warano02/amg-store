import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../hooks/useAppContext';
import { Link } from 'react-router-dom';
const IpNavbar = () => {
    const { user, cardItem } = useAppContext()
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/collection/samsun/product/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const ref = React.useRef(null)

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(ref.current.scrollTop > 10);
        };
        ref.current.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={ref} className="h-6 md:h-auto mb-12">
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between md:justify-center gap-7 px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 bg-[#F5F5F5] text-gray-700 backdrop-blur-lg py-3 md:py-4`}>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                   <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                    </svg>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className="group flex flex-col gap-0.5 text-gray-700 ">
                            {link.name}
                            <div className="bg-gray-700 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                   
                    <div className="relative cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {cardItem > 0 && < button className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full">{cardItem} </button>}                    </div>
                    {
                        user ?
                            (
                                null

                            )
                            :

                            <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer">
                                Login
                            </button>
                    }
                </div>

                {/* Mobile Menu Button */}
                <div className="relative cursor-pointer md:hidden">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full">{cardItem} </button>
                </div>
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-[#F5F5F5] text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>


                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                    {
                        user ?
                            (
                                null

                            )
                            :

                            <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer">
                                Login
                            </button>
                    }
                </div>
            </nav >
        </div >
    );
}
export default IpNavbar


