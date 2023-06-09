import React from 'react';
import {FaHashtag} from 'react-icons/fa'


const About = () => {
    return (
        <div className="container min-h-screen py-2 mx-auto">
            <div className="w-full flex justify-between items-center lg:flex-row lg:mt-20 md:flex-row md:mt-5 sm:flex-col mob:flex-col mob:mt-2">
                <div className="lg:w-[50%]">
                    <img src="/photo.png" className="lg:w-[100%] md:w-[60%] rounded-lg lg:rotate-1 lg:hover:rotate-0 transition md:rotate-0 mob:rotate-0 duration-200 ease-in" alt=""/>
                </div>
                <div className="lg:w-[30%] md:w-full mob:w-full">
                    <div className="lg:mt-0 mob:mt-4">
                        <h1 className="text-dark-coral lg:text-6xl mb-10 font-bold mb-3 tracking-wide mob:pt-4 mob:text-3xl">About me</h1>
                        <p className="text-gray-700 mb-5 lg:text-lg tracking-wide font-thin mob:pt-1 mob:text-sm">
                            Hi there! Welcome to my photography portfolio! I'm a young amateur photographer who loves to create beautiful and unforgettable photos.
                            In my collection, you'll find a variety of photos, from portraits to landscapes and street photography. I love playing with colors and light to create a unique
                            atmosphere and tell a special story in each photo.
                        </p>
                        <div className="w-full pt-5 grid grid-cols-2 gap-3">
                            {['photographylove', 'lifestylephotographer', 'hopeful', 'portraiture'].map((hashtag) => (
                                <div key={hashtag} className="flex items-center lg:text-md mob:text-sm text-gray-500 font-thin hover:translate-x-0.5 transition duration-200 cursor-pointer">
                                    <FaHashtag className="text-light-coral mr-0.5" />
                                    {hashtag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;