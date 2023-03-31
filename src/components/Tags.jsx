import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Tags = () => {
    const dispatch = useDispatch();
    const activeTag = useSelector((state) => state.photos.activeTag);

    const filterByTag = (tag) => {
        dispatch({ type: "FILTER_PHOTOS", payload: tag });
    };

    const activeTagClass = (tag) => {
        return activeTag === tag ? "bg-pink-400" : "";
    }

    const defaultTagClasses = (tag) => {
        return ["uppercase", "text-amber-50", "text-sm", "font-semibold", "px-2", "py-2", "rounded-xl", "hover:bg-pink-400", "transition"];
    }

    return (
        <nav className='w-full fixed bottom-10 transition overflow-hidden z-30'>
            <div className="container  mx-auto py-2">
                <div className="bg-black/80 max-w-[500px] mx-auto shadow-md flex justify-center rounded-xl  p-3">
                    <li className="list-none px-3 lg:px-8 cursor-pointer">
                        <span onClick={() => filterByTag("all")} className={[activeTagClass("all"), ...defaultTagClasses()].join(' ')}>all</span>
                    </li>
                    <li className="list-none px-3 lg:px-8 cursor-pointer">
                        <span onClick={() => filterByTag("lifestyle")} className={[activeTagClass("lifestyle"), ...defaultTagClasses()].join(' ')}>lifestyle</span>
                    </li>
                    <li className="list-none px-3 lg:px-8 cursor-pointer">
                        <span onClick={() => filterByTag("corporate")} className={[activeTagClass("corporate"), ...defaultTagClasses()].join(' ')}>corporate</span>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Tags;
