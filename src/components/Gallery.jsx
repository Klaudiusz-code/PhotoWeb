import React from 'react';
import FilterNav from "./FilterNav";

import {useEffect, useState} from "react";

export  const galleryImg = [
    {name: '1', url: '1.jpg', category: 'testCategory1',},
    {name: '2', url: '3.jpg', category: 'testCategory1'},
    {name: '3', url: '4.jpg', category: 'testCategory1'},
    {name: '4', url: '5.jpg', category: 'testCategory1'},
    {name: '5', url: '6.jpg', category: 'testCategory1'},
    {name: '6', url: '7.jpg', category: 'testCategory1'},
    {name: '7', url: '8.jpg', category: 'testCategory1'},
    {name: '8', url: '9.jpg', category: 'testCategory1'},
    {name: '9', url: '10.jpeg', category: 'testCategory2'},
    {name: '1', url: '11.jpeg', category: 'testCategory2'},
    {name: '2', url: '12.jpeg', category: 'testCategory2'},
    {name: '3', url: '13.jpg', category: 'testCategory2'},
    {name: '4', url: '14.jfif', category: 'testCategory2'},
    {name: '5', url: '15.jpg', category: 'testCategory2'},
    {name: '6', url: '16.png', category: 'testCategory2'},
    {name: '7', url: '17.jpg', category: 'testCategory2'},
    {name: '8', url: '18.jpg', category: 'testCategory2'},
    {name: '9', url: '19.jpg', category: 'testCategory2'},
    {name: '1', url: '20.jpg', category: 'testCategory2'},
    {name: '1', url: 'ev1.jpg', category: 'testCategory2'},
    {name: '1', url: 'ev2.jpg', category: 'testCategory2'},
];
const Gallery = () => {

    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(galleryImg);
        setCollection([...new Set(galleryImg.map((item) => item.category))]);
    }, []);

    const gallery_filter = (itemData) => {
        if (itemData === 'all') {
            setData(galleryImg);
        } else {
            const filterData = galleryImg.filter((item) => item.category === itemData);
            setData(filterData);
        }
    };

    return (
        <>
            <div className="mx-auto lg:mr-24 mt-6 lg:ml-24 lg:columns-3 gap-5 md:columns-2 sm:columns-1 md:mr-4 sm:ml-4 mx-auto space-y-10 pb-28">
                {data.map((img) => {
                    return (
                        <div className="break-inside-avoid relative cursor-pointer" key={img.id}>
                            <img src={img.url} alt={img.name} className="transition duration-200" />
                            <div
                                className="absolute bottom-0 left-0 w-full h-full flex items-center flex-wrap justify-center bg-pink-400/30 bg-opacity-75 text-white text-4xl font-bold p-2 transition duration-300 opacity-0 hover:opacity-100"
                            >
                                {img.name}
                            </div>
                        </div>
                    );
                })}
            </div>
            <FilterNav collection={collection} gallery_filter={gallery_filter} />
        </>
    );
};

export default Gallery;