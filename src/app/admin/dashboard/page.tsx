"use client";
import Navigation from "@/components/admin/Navigation";
import TopNavigation from "@/components/admin/TopNavigation";
import {useState} from "react";
import Dashboard from "@/components/admin/Dashboard";
import ManageStays from "@/components/admin/ManageStays";

const page = () => {

    const [activeTab, setActiveTab] = useState("tab0");

    return (
        <div className="w-full h-screen p-4 gap-4 grid grid-cols-12 relative overflow-clip">

            <div className="w-80 aspect-square bg-violet-100 absolute rounded-full blur-3xl -z-10 left-20 -top-52"></div>
            <div className="w-[700px] aspect-square bg-violet-100 absolute rounded-full blur-3xl -z-10 top-0 -right-52"></div>
            <div className="w-[500px] aspect-square bg-violet-100 absolute rounded-full blur-3xl -z-10 left-20 -bottom-52"></div>

            <div className="lg:col-span-3 xl:col-span-2 hidden lg:block">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            <div className="col-span-full lg:col-span-9 xl:col-span-10 w-full h-full rounded-2xl flex flex-col">
                <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="w-full mt-4 h-[calc(100vh-8rem)] bg-white rounded-xl overflow-clip border-violet-100 border backdrop-blur-2xl opacity-90">
                    {activeTab === "tab0" && <Dashboard/>}
                    {activeTab === "tab1" && <ManageStays/>}
                </div>
            </div>
        </div>
    );
}

export default page;