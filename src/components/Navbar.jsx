import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='container w-full mx-auto flex items-center justify-between p-4'>
            <div className='max-w-[200px]'>
                <h1 className='font-bold text-2xl cursor-pointer'>LOGO</h1>
            </div>
            <button
                className='text-2xl cursor-pointer'
                onClick={toggleMenu}
            >
                <FiAlignJustify />
            </button>
            <MobileMenu isMenuOpen={isMenuOpen} onClose={toggleMenu} />
        </nav>
    );
};

export default Navbar;