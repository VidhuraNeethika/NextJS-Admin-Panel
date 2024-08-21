import {BsBox, BsBoxes, BsClock} from "react-icons/bs";
import {FiUsers} from "react-icons/fi";
import {MdOutlineAttachMoney} from "react-icons/md";
import React from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {

    const dashboardTopCards = [
        {
            title: 'Products',
            total: 10,
            icon: <BsBox/>,
            description: 'Total products in your store for this month'
        },
        {
            title: 'Orders',
            total: 20,
            icon: <BsBoxes/>,
            description: 'Total orders in your store for this month'
        },
        {
            title: 'Customers',
            total: 30,
            icon: <FiUsers/>,
            description: 'Total customers in your store for this month'
        },
        {
            title: 'Revenue',
            total: '$1000',
            icon: <MdOutlineAttachMoney/>,
            description: 'Total revenue generated for this month'
        }
    ];

    const topCustomers = [
        {
            name: 'John Doe',
            email: 'allen@gmail.com',
            image: 'https://images.pexels.com/photos/9171215/pexels-photo-9171215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            totalOrders: 10,
        },
        {
            name: 'Chirstopher',
            email: 'john@gamil.com',
            image: 'https://images.pexels.com/photos/27786109/pexels-photo-27786109/free-photo-of-man-in-suit-holding-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            totalOrders: 22,
        },
        {
            name: 'Allen Walker',
            email: 'allen@gmail.com',
            image: 'https://images.pexels.com/photos/27742043/pexels-photo-27742043/free-photo-of-man-in-an-elegant-black-suit-taking-photos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            totalOrders: 14,
        },
    ]

    const tasks = [
        {
            title: 'Meeting with Allen',
            date: 'Today',
            time: '10:00 AM',
            color: 'bg-orange-300',
            status: 'pending',
            icon : <BsClock/>
        },
        {
            title: 'Meeting with John',
            date: 'Tomorrow',
            time: '11:00 AM',
            color: 'bg-green-300',
            status: 'completed',
            icon : <BsClock/>
        },
        {
            title: 'Meeting with Chris',
            date: 'Tomorrow',
            time: '12:00 PM',
            color: 'bg-blue-300',
            status: 'pending',
            icon : <BsClock/>
        },
    ]

    return (
        <div className="w-full h-full p-8 overflow-y-auto overflow-x-hidden">
            <div>
                <h2 className="text-3xl">Hello, Allen,</h2>
                <p className="text-neutral-400 mt-2">Welcome to your dashboard. Here you can manage your products,
                    orders, and customers.</p>
            </div>

            <div className="grid grid-cols-12 mt-6 gap-4">

                <div className="xl:col-span-9 col-span-full">

                    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 mt-6 w-full">
                        {dashboardTopCards.map((card, index) => (
                            <div key={index}
                                 className="bg-white p-4 rounded-lg flex items-center justify-between shadow-xl shadow-neutral-100">
                                <div>
                                    <span className="text-neutral-400 block">{card.title}</span>
                                    <span className="text-4xl block mt-2">{card.total}</span>
                                    <span className="text-neutral-400 block mt-2 text-[12px]">{card.description}</span>
                                </div>
                                <div className="text-3xl text-neutral-200">
                                    {card.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <h3>Performance Tracking</h3>
                        <hr className="my-5"/>
                        <div className="w-full h-full bg-white p-4 rounded-lg shadow-xl shadow-neutral-100">
                            <Chart type={`area`} options={{
                                chart: {
                                    id: 'area-datetime',
                                    type: 'pie',
                                    height: 350,
                                    zoom: {
                                        autoScaleYaxis: true
                                    }
                                }, xaxis: {
                                    type: 'category',
                                    categories: [
                                        'day1', 'day2', 'day3', 'day4'
                                    ]
                                }
                            }}
                                   series={[{
                                       name: 'series1',
                                       data: [30, 25, 21, 25],
                                       color: '#cddbf9',
                                   }, {
                                       name: 'series2',
                                       data: [23, 12, 15, 18],
                                       color: '#d7d2f9',
                                   }, {
                                       name: 'series10',
                                       data: [10, 33, 33, 9],
                                       color: '#f9cacc',
                                   }]}
                                   width={`100%`}
                                   height={`450px`}
                            />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-3 col-span-full">

                    <div className="w-full">
                        <h3>Current Task</h3>
                        <hr className="my-5"/>
                        <div>
                            {tasks.map((task, index) => (
                                <div key={index}
                                     className="bg-white p-4 rounded-lg flex items-center justify-between mt-4 shadow-xl shadow-neutral-100">
                                    <div className="flex items-center">
                                        <div className={`text-xl ${task.color} text-white rounded-full p-2`}>
                                            {task.icon}
                                        </div>
                                        <div className="ml-4">
                                            <span className="block text-sm">{task.title}</span>
                                            <span
                                                className="text-neutral-400 block text-sm">{task.date} at {task.time}</span>
                                        </div>
                                    </div>
                                    <div>
                                    <span
                                        className="text-neutral-300 block border border-neutral-200 rounded-full px-2 p-1 text-[12px]">{task.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="w-full mt-6">
                        <h3>Top Customers</h3>
                        <hr className="my-5"/>
                        <div>
                            {topCustomers.map((customer, index) => (
                                <div key={index}
                                     className="bg-white p-4 rounded-lg flex items-center justify-between mt-4 shadow-xl shadow-neutral-100">
                                    <div className="flex items-center">
                                        <img src={customer.image} alt=""
                                             className="w-12 aspect-square rounded-full object-cover"/>
                                        <div className="ml-4">
                                            <span className="block text-sm">{customer.name}</span>
                                            <span className="text-neutral-400 block text-sm">{customer.email}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-2xl">{customer.totalOrders}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;