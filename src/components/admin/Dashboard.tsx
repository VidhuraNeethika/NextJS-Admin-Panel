import {BsBox, BsBoxes} from "react-icons/bs";
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
        {
            name: 'Cilian Murphy',
            email: 'john@gamil.com',
            image: 'https://images.pexels.com/photos/20097456/pexels-photo-20097456/free-photo-of-portrait-of-man-in-black-suit.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            totalOrders: 41,
        }
    ]

    return (
        <div className="w-full h-full p-8 overflow-y-auto">
            <div>
                <h2 className="text-3xl">Hello, Allen,</h2>
                <p className="text-neutral-400 mt-2">Welcome to your dashboard. Here you can manage your products,
                    orders, and customers.</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
                {dashboardTopCards.map((card, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-between shadow-xl shadow-neutral-50">
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

            <div className="grid grid-cols-12 mt-10 gap-4">
                <div className="col-span-9">
                    <h3>Performance Tracking</h3>
                    <hr className="my-5"/>
                    <div className={`w-full h-full`}>
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
                                   data: [30, 40, 25, 50],
                                   color: '#cddbf9',
                               }, {
                                   name: 'series2',
                                   data: [23, 12, 54, 61],
                                   color: '#d7d2f9',
                               }, {
                                   name: 'series10',
                                   data: [22, 33, 33,32],
                                   color: '#f9cacc',
                               }]}
                               width={`100%`}
                               height={`100%`}
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <h3>Top Customers</h3>
                    <hr className="my-5"/>
                    <div>
                        {topCustomers.map((customer, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <img src={customer.image} alt="" className="w-12 aspect-square rounded-full object-cover"/>
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
    );
}

export default Dashboard;