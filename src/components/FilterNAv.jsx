import React from 'react';

const FilterNav = () => {
    return (
        <nav className='w-full fixed bottom-10 transition overflow-hidden z-30'>
            <div className="container  mx-auto py-2">
                <div className="bg-black/80 max-w-[500px] mx-auto shadow-md flex justify-center rounded-xl  p-3">
                    <li className="list-none px-3 lg:px-8 cursor-pointer">
                        <span className="bg-pink-400 uppercase text-amber-50 text-sm font-semibold px-2 py-2 rounded-xl hover:bg-pink-400 transition">all</span>
                    </li>
                    <li className="list-none px-3 lg:px-8 cursor-pointer">
                        <span className="uppercase text-amber-50 lg:text-sm font-semibold px-2 py-2 rounded-xl hover:bg-pink-400 transition">lifestyle</span>
                    </li>
                    <li className="list-none px-3 lg:px-8 cursor-pointer">
                        <span className="uppercase text-amber-50 text-sm font-semibold px-2 py-2 rounded-xl hover:bg-pink-400 transition">corporate</span>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default FilterNav;