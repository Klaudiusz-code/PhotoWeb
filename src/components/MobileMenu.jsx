import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({ isMenuOpen, onClose }) => {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${isMenuOpen ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-200 ease-in-out filter  `}>
            <div className="flex flex-col justify-center items-center mt-28">
                <li className="text-2xl font-bold text-light-coral my-4 list-none cursor-pointer">
                    Home
                </li>
                <li className="text-2xl font-bold text-light-coral my-4 list-none cursor-pointer">
                    About me
                </li>
                <li className="text-2xl font-bold text-light-coral my-4 list-none cursor-pointer">
                    Contact
                </li>
                <button className="text-2xl font-bold my-4 hover:text-light-coral fixed right-10 top-0" onClick={onClose}>
                    <AiOutlineClose/>
                </button>
            </div>
        </div>
    )
};

export default MobileMenu;
