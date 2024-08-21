"use client";
import Logo from "../../assets/img/logo/logo.png";
import Image from "next/image";
// @ts-ignore
import {
    BsAirplaneFill, BsBack, BsBook, BsBookFill,
    BsBookmarkPlusFill,
    BsBuildingFill, BsBuildings,
    BsCarFrontFill,
    BsFillGrid1X2Fill,
    BsGearFill, BsHouse, BsHouseFill,
    BsInfoCircle,
    BsPower
} from "react-icons/bs";
import {BiSolidUser} from "react-icons/bi";
import {TbLayoutDashboard} from "react-icons/tb";
import {RxDashboard, RxHome} from "react-icons/rx";
import {MdOutlineSpaceDashboard} from "react-icons/md";
import {PiAirplaneInFlight} from "react-icons/pi";
import {LiaCarSideSolid} from "react-icons/lia";
import {IoBookmarksOutline, IoSettingsOutline} from "react-icons/io5";
import {HiOutlineBuildingOffice2} from "react-icons/hi2";
import {LuPenLine, LuUsers2} from "react-icons/lu";

const Navigation = ({activeTab, setActiveTab}: { activeTab: string, setActiveTab: any }) => {

    const navigation = [
        {
            icon: <MdOutlineSpaceDashboard />,
            title: "Dashboard",
            link: ""
        },
        {
            icon: <RxHome />,
            title: "Manage Stays",
            link: ""
        },
        {
            icon: <PiAirplaneInFlight />,
            title: "Manage Flights",
            link: ""
        },
        {
            icon: <LiaCarSideSolid />,
            title: "Manage Cars",
            link: ""
        },
        {
            icon: <IoBookmarksOutline />,
            title: "Bookings",
            link: ""
        },
        {
            icon: <HiOutlineBuildingOffice2 />,
            title: "Manage Hotels",
            link: ""
        },
        {
            icon: <LuUsers2 />,
            title: "Manage Users",
            link: ""
        },
        {
            icon: <LuPenLine />,
            title: "Manage Blogs",
            link: ""
        }

    ];
    const bottomNavigation = [
        {
            icon: <BsInfoCircle/>,
            title: "Help & Support",
            link: ""
        },
        {
            icon: <IoSettingsOutline />,
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
        <div className="w-full bg-white h-full px-6 py-8 rounded-2xl flex justify-between flex-col border-violet-100 border backdrop-blur-2xl xl:opacity-90">
            <Image src={Logo} alt="logo" className="h-10 w-fit object-contain lg:mx-auto"/>
            <div className="flex flex-col h-full items-center mt-10 gap-y-4 w-full overflow-auto pe-4 lg:pe-0">
                <h3 className="text-[12px] uppercase block w-full">Menus</h3>
                {navigation.map((item, index) => (
                    <div key={index} onClick={() => setActiveTab("tab" + index)}
                         className={`flex items-center text-sm space-x-2 cursor-pointer w-full p-2 px-4 rounded-md text-neutral-500 
                         ${activeTab === "tab" + index ? "bg-black text-white" : ""} `}>
                        {item.icon}
                        <span className="">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="w-full">
                <h3 className="text-[12px] uppercase block w-full mb-3">Profile</h3>
                <div className="flex items-center space-x-4 w-full">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo" className="object-cover w-10 h-10 rounded-full"/>
                    <div>
                        <h1 className="text-neutral-800 font-semibold text-sm">John Doe</h1>
                        <p className="text-neutral-600 text-xs">john@gmail.com</p>
                    </div>
                </div>

                <hr className="my-3 mt-5"/>

                <div className="flex flex-col items-center gap-y-1">
                    <h3 className="text-[12px] uppercase block w-full mb-3">Others</h3>
                    {bottomNavigation.map((item, index) => (
                        <div key={index}
                             className="flex items-center text-[13px] transition duration-300 space-x-2 cursor-pointer w-full text-neutral-400 hover:bg-neutral-100 p-2 px-4 rounded-xl">
                            <div className="">
                                {item.icon}
                            </div>
                            <span className="text-neutral-400">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;