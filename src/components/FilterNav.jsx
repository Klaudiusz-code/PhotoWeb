import React from 'react';

const FilterNav = ({ collection, gallery_filter }) => {
    return (
        <nav className='w-full fixed bottom-10 transition overflow-hidden z-30'>
            <div className="container  mx-auto py-2">
                <div className="bg-black/80 max-w-[500px] mx-auto shadow-md flex justify-center rounded-xl  p-3">
                    <li className="list-none px-3 lg:px-8 cursor-pointer"
                        onClick={() => {gallery_filter("all");}}>
                        <span className=" uppercase text-amber-50 text-sm font-semibold px-2 py-2 rounded-xl hover:bg-pink-400 transition">All</span>
                    </li>
                    {collection.map((item) => {
                        return (
                            <li key={item} className="list-none px-3 lg:px-8 cursor-pointer" onClick={() => gallery_filter(item)}>
                                <span className="uppercase text-amber-50 text-sm font-semibold px-2 py-2 rounded-xl hover:bg-pink-400 transition">{item}</span>
                            </li>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};

export default FilterNav;
