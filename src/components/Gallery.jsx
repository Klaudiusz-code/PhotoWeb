import React from 'react';
import FilterNAv from "./FilterNAv";

const Gallery = () => {

    const galleryImg = [
        {name: 'Lorem ipsum', url: '1.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '3.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '4.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '5.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '6.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '7.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '8.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '9.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '10.jpeg', id: '23'},
        {name: 'Lorem ipsum', url: '11.jpeg', id: '23'},
        {name: 'Lorem ipsum', url: '12.jpeg', id: '23'},
        {name: 'Lorem ipsum', url: '13.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '14.jfif', id: '23'},
        {name: 'Lorem ipsum', url: '15.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '16.png', id: '23'},
        {name: 'Lorem ipsum', url: '17.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '18.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '19.jpg', id: '23'},
        {name: 'Lorem ipsum', url: '20.jpg', id: '23'},
    ];

    return (
        <>
        <div
            className="mx-auto mr-4 mt-4 ml-4 lg:columns-3 gap-5 md:columns-2 sm:columns-1 mx-auto space-y-10 pb-28">
            {galleryImg.map((img) => {
                return (
                    <div className="bg-gray-200 break-inside-avoid relative cursor-pointer">
                        <img src={img.url} alt={img.name}/>
                        <div
                            className="absolute bottom-0 left-0 w-full h-full flex items-center flex-wrap justify-center bg-pink-400/50 bg-opacity-75 text-white text-2xl py-2 transition duration-300 opacity-0 hover:opacity-100">
                            {img.name}
                        </div>
                    </div>
                )
            })}


        </div>
            <FilterNAv/>
        </>
    )

}

export default Gallery;
