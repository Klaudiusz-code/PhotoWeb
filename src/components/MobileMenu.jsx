import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import {getSingleElementValue} from "@testing-library/jest-dom/dist/utils";

const MobileMenu = ({ isMenuOpen, onClose }) => {
    const menuClasses = `flex fixed top-0 -right-2 transition-transform duration-200 ${
        isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
    }`;

    return (
        <div className={menuClasses}>
            <div className='bg-pink-400 h-screen lg:max-w-2xl p-5 pt-8 w-72'>
                <BiArrowToRight
                    className='absolute -left-3 top-2/4 text-pink-400 font-medium bg-white rounded-full h-10 w-10 cursor-pointer'
                    onClick={onClose}
                />
                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-2xl text-white">Menu</h1>
                    <div className="flex flex-wrap items-center">
                        <ul>
                            <li>
                                test
                            </li>
                            <li>
                                 test
                            </li>
                            <li>
                              test
                            </li>
                            <li>
                               test
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MobileMenu



















