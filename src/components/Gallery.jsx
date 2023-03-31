import React from 'react';
import { useSelector } from 'react-redux';

import Tags from './Tags';

const Gallery = () => {
    const allPhotos = useSelector((state) => state.photos.allPhotos);
    const filteredPhotos = useSelector((state) => state.photos.filteredPhotos) || allPhotos;

    const photos = filteredPhotos.length > 0 ? filteredPhotos : allPhotos;

    return (
        <>
            <div
                className="mx-auto lg:mr-24 mt-6 lg:ml-24 lg:columns-3 gap-5 md:columns-2 sm:columns-1 md:mr-4 sm:ml-4 space-y-10 pb-28"
            >
                {photos.map((photo) =>
                    <div
                        key={ photo.id }
                        className="bg-gray-200 break-inside-avoid relative cursor-pointer"
                    >
                        <img src={ photo.url } alt={ photo.name }/>
                        <div
                            className="absolute bottom-0 left-0 w-full h-full flex items-center flex-wrap justify-center bg-pink-400/30 bg-opacity-75 text-white text-4xl font-bold p-2 transition duration-300 opacity-0 hover:opacity-100"
                        >
                            { photo.name }
                        </div>
                    </div>
                )}
            </div>
            <Tags />
        </>
    )

}

export default Gallery;
