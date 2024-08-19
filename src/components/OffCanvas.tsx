'use client';
import {BsX} from "react-icons/bs";

const OffCanvas = ({children, isOpen, setIsOpen}: { children: any, isOpen: boolean, setIsOpen: any }) => {
    return (
        <div
            className={`w-11/12 md:w-5/12 h-screen shadow-2xl shadow-neutral-200 rounded-r-xl fixed top-0 left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
            <div className="w-full h-full relative">
                <button className="p-1 rounded bg-black text-white absolute top-5 right-5 z-20"
                        onClick={() => setIsOpen(false)}>
                    <BsX className="text-xl"/>
                </button>
                {children}
            </div>
        </div>
    );
}

export default OffCanvas;