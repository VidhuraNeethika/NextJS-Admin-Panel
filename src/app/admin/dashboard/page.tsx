import Navigation from "@/components/admin/Navigation";

const page = () => {
    return (
        <div className="w-full h-screen p-4 gap-4 grid grid-cols-12">
            <div className="col-span-2">
                <Navigation/>
            </div>
            <div className="col-span-10 w-full h-full bg-neutral-100 rounded-2xl">

            </div>
        </div>
    );
}

export default page;