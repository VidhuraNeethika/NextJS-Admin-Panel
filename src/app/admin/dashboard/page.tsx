"use client";
import Navigation from "@/components/admin/Navigation";
import TopNavigation from "@/components/admin/TopNavigation";
import {useState} from "react";
import Dashboard from "@/components/admin/Dashboard";
import ManageStays from "@/components/admin/ManageStays";

const page = () => {

    const [activeTab, setActiveTab] = useState("tab0");

    return (
        <div className="w-full h-screen p-4 gap-4 grid grid-cols-12">
            <div className="lg:col-span-3 xl:col-span-2 hidden lg:block">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            <div
                className="col-span-full lg:col-span-9 xl:col-span-10 w-full h-full rounded-2xl flex flex-col">
                <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="w-full mt-4 h-full bg-neutral-200 rounded-xl overflow-auto">
                    {activeTab === "tab0" && <Dashboard/>}
                    {activeTab === "tab1" && <ManageStays/>}
                </div>
            </div>
        </div>
    );
}

export default page;