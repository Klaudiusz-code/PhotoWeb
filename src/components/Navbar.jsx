import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='w-full mx-auto flex items-center justify-between p-4'>
            <div className='max-w-[200px]'>
                <h1 className="text-2xl">Logo</h1>
            </div>
            <div className="flex items-center items-center">
                <h2 className="mr-3 font-semibold text-sm text-light-coral">Menu</h2>
                <button
                    className='text-2xl cursor-pointer bx-sh rounded-b-md text-dark-coral p-2'
                    onClick={toggleMenu}
                >
                    <FiAlignJustify />
                </button>
            </div>

            <MobileMenu isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </nav>
    );
};


export default Navbar;
