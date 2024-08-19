"use client";
import Logo from "../../assets/img/logo/logo.png";
import Image from "next/image";
// @ts-ignore
import {
    BsAirplaneFill,
    BsBookmarkPlusFill,
    BsBuildingFill,
    BsCarFrontFill,
    BsFillGrid1X2Fill,
    BsGearFill,
    BsInfoCircle,
    BsPower
} from "react-icons/bs";

const Navigation = ({activeTab, setActiveTab}: { activeTab: string, setActiveTab: any }) => {

    const navigation = [
        {
            icon: <BsFillGrid1X2Fill/>,
            title: "Dashboard",
            link: ""
        },
        {
            icon: <BsBuildingFill/>,
            title: "Manage Stays",
            link: ""
        },
        {
            icon: <BsAirplaneFill/>,
            title: "Manage Flights",
            link: ""
        },
        {
            icon: <BsCarFrontFill/>,
            title: "Manage Cars",
            link: ""
        },
        {
            icon: <BsBookmarkPlusFill/>,
            title: "Bookings",
            link: ""
        },
        // {
        //     icon: <BsGearFill/>,
        //     title: "Settings",
        //     link: ""
        // },
        // {
        //     icon: <BsPower/>,
        //     title: "Logout",
        //     link: ""
        // }
    ];
    const bottomNavigation = [
        {
            icon: <BsInfoCircle/>,
            title: "Help & Support",
            link: ""
        },
        {
            icon: <BsGearFill/>,
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
        <div className="w-full bg-neutral-50 h-full px-6 py-8 rounded-2xl relative">
            <Image src={Logo} alt="logo" className="h-16 w-fit object-contain lg:mx-auto"/>
            <div className="flex flex-col items-center mt-10 gap-y-4">
                <h3 className="text-[12px] uppercase block w-full">Menus</h3>
                {navigation.map((item, index) => (
                    <div key={index} onClick={() => setActiveTab("tab" + index)}
                         className={`flex items-center text-sm space-x-2 cursor-pointer w-full p-2 px-4 rounded-xl
                         ${activeTab === "tab" + index ? "bg-black text-white" : "text-neutral-600"} `}>
                        {item.icon}
                        <span className="">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-8 left-0 px-6 w-full">
                <h3 className="text-[12px] uppercase block w-full mb-3">Profile</h3>
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-clip">
                        <img
                            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="logo" className="object-cover bg-neutral-200 w-full h-full"/>
                    </div>
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
                            <span className="text-neutral-700">
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