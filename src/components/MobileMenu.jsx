import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom";

const MobileMenu = ({ isMenuOpen, onClose }) => {

    const links = [
        {name:"HOME",link:"/"},
        {name:"ABOUT",link:'/about'},
        {name:"CONTACT",link:"/contact"},
    ]
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white  z-50 transform ${isMenuOpen ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-200 ease-in-out filter`}>
            <div className="flex flex-col justify-center items-center mt-28">
                {links?.map((link) =>{
                    return(
                        <li className="lg:text-5xl md:text-3xl mob:text-2xl font-semibold p-2 transition text-light-coral my-6 list-none cursor-pointer hover:text-pink-600 ">
                            <Link to={link.link} onClick={onClose}>{link.name}</Link>
                        </li>
                    )
                })}
                <button className="text-2xl font-bold my-4 hover:text-light-coral fixed right-10 top-0" onClick={onClose}>
                    <AiOutlineClose/>
                </button>
            </div>
        </div>
    )
};

export default MobileMenu;
