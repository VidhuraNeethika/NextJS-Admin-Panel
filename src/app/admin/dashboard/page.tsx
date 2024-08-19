import Navigation from "@/components/admin/Navigation";
import TopNavigation from "@/components/admin/TopNavigation";

const page = () => {
    return (
        <div className="w-full h-screen p-4 gap-4 grid grid-cols-12">
            <div className="lg:col-span-3 xl:col-span-2 hidden lg:block">
                <Navigation/>
            </div>
            <div
                className="col-span-full lg:col-span-9 xl:col-span-10 w-full h-full bg-neutral-100 rounded-2xl p-4 flex flex-col">
                <TopNavigation/>
                <div className="w-full mt-4 h-full bg-neutral-200 rounded-xl overflow-auto">

                </div>
            </div>
        </div>
    );
}

export default page;