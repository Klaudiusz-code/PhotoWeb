import React from 'react';
import {CiLocationOn} from 'react-icons/ci'
import {BsPhone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const contactData = [
    {
        icon: <BsPhone size={80} color="#f08080" />,
        title: "Call me",
        content: "725 728 045"
    },
    {
        icon: <CiLocationOn size={80} color="#f08080" />,
        title: "940 Petter Ae",
        content: "Lublin,PL"
    },
    {
        icon: <AiOutlineMail size={80} color="#f08080" />,
        title: "Email us at",
        content: "testowy@gmai.com"
    }
];

const Contact = () => {


    return (
        <div className="container mx-auto min-h-screen">
            <div className="mb-10">
                <h1 className="text-5xl mt-8 mb-5 text-center text-dark-coral font-bold">Contact</h1>
                <p className="text-center text-2xl mt-16 font-thin text-dark-coral tracking-wide">
                    I am always open to new projects and I will be happy to cooperate with you
                </p>
            </div>
            <div className="w-full lg:mt-32 grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3">
                {contactData.map((contact, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 hover:-translate-y-1.5 transition duration-200 ease-in cursor-pointer">
                        {contact.icon}
                        <h3 className="font-semibold text-gray-500 text-lg">{contact.title}</h3>
                        <span className="text-gray-400 font-thin text-md">{contact.content}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
