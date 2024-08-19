'use client';
import Logo from "../../assets/img/logo/logo.png";
import Link from "next/link";
import {IoHome, IoNotifications} from "react-icons/io5";
import {BsGearFill, BsPower} from "react-icons/bs";
import {FiMenu, FiSearch} from "react-icons/fi";
import OffCanvas from "@/components/OffCanvas";
import Navigation from "@/components/admin/Navigation";
import {useState} from "react";

const TopNavigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-20 px-8 bg-white rounded-xl">
            <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center">
                    <img src={Logo.src} alt="logo" className="w-20 object-contain lg:hidden"/>
                    <span className="font-bold text-neutral-900 hidden lg:block">Welcome to Dashboard</span>
                </div>
                <div className="items-center justify-center hidden lg:flex">
                    <div className="flex gap-4 w-full h-10 bg-neutral-100 rounded-lg items-center px-4">
                        <FiSearch className="bg-neutral-100"/>
                        <input type="text" placeholder="Search" className="bg-transparent outline-0 text-sm w-full"/>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="items-center gap-4 hidden lg:flex">
                        <Link href={""} className="text-neutral-600 bg-neutral-100 p-2 rounded"><IoHome/></Link>
                        <Link href={""}
                              className="text-neutral-600 bg-neutral-100 p-2 rounded"><IoNotifications/></Link>
                        <Link href={""} className="text-neutral-600 bg-neutral-100 p-2 rounded"><BsGearFill/></Link>
                        <Link href={""} className="text-neutral-600 bg-neutral-100 p-2 rounded"><BsPower/></Link>
                    </div>
                    <button className="bg-black text-white p-2 rounded lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <FiMenu/>
                    </button>
                </div>
                <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen}>
                    <Navigation/>
                </OffCanvas>
            </div>
        </div>
    );
}

export default TopNavigation;