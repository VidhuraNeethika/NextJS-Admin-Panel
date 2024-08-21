'use client';
import Logo from "../../assets/img/logo/logo.png";
import Link from "next/link";
import {IoHome, IoNotifications, IoNotificationsOutline, IoSettingsOutline} from "react-icons/io5";
import {BsGearFill, BsPower} from "react-icons/bs";
import {FiHome, FiMenu, FiSearch} from "react-icons/fi";
import OffCanvas from "@/components/OffCanvas";
import Navigation from "@/components/admin/Navigation";
import {useState} from "react";
import {RxHome} from "react-icons/rx";

const TopNavigation = ({activeTab, setActiveTab}: { activeTab: string, setActiveTab: any }) => {

    const [isOpen, setIsOpen] = useState(false);

    const topNavigation = [
        {
            icon: <FiHome/>,
            title: "Home",
            link: ""
        },
        {
            icon: <IoNotificationsOutline/>,
            title: "Notifications",
            link: ""
        },
        {
            icon: <IoSettingsOutline/>,
            title: "Settings",
            link: ""
        },
        {
            icon: <BsPower/>,
            title: "Logout",
            link: ""
        }
    ];

    return (
        <div className="w-full h-20 px-8 flex items-center justify-between bg-neutral-50 rounded-xl gap-4 xl:gap-10">
            <img src={Logo.src} alt="logo" className="h-6 object-contain lg:hidden"/>
            <span
                className="text-neutral-500 hidden lg:block w-fit whitespace-nowrap">Welcome to Dashboard</span>
            <div
                className="gap-4 w-full h-10 bg-white rounded-lg items-center px-4 shadow-xl shadow-neutral-100 border border-neutral-100 hidden md:flex">
                <FiSearch className="bg-white text-neutral-400"/>
                <input type="text" placeholder="Search" className="bg-transparent outline-0 text-sm w-full"/>
            </div>
            <div className="items-center gap-2 hidden lg:flex">
                {topNavigation.map((item, index) => (
                    <Link href={item.link} key={index}>
                        <div
                            className={`flex items-center space-x-2 cursor-pointer text-neutral-500 p-2 px-4 rounded-xl text-[12px]`}>
                            {item.icon}
                            <span className="xl:block hidden">
                                            {item.title}
                                        </span>
                        </div>
                    </Link>
                ))}
            </div>
            <button className="bg-black text-white p-2 rounded lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <FiMenu/>
            </button>
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} className="lg:hidden">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
            </OffCanvas>
        </div>
    );
}

export default TopNavigation;