import React from "react";
import {
    FaBoxOpen,
    FaShoppingCart,
    FaUsers,
    FaDollarSign,
} from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">

                {/* Logo */}
                <div className="h-20 flex items-center justify-center border-b">
                    <h1 className="text-2xl font-bold text-orange-500">
                        ShopZone
                    </h1>
                </div>

                {/* Menu */}
                <nav className="flex-1 p-5 space-y-3">

                    <button className="w-full flex items-center gap-3 bg-orange-500 text-white px-4 py-3 rounded-xl shadow-md">
                        <FaBoxOpen />
                        Dashboard
                    </button>

                    <button className="w-full flex items-center gap-3 hover:bg-gray-100 text-gray-700 px-4 py-3 rounded-xl transition">
                        <FaShoppingCart />
                        Orders
                    </button>

                    <button className="w-full flex items-center gap-3 hover:bg-gray-100 text-gray-700 px-4 py-3 rounded-xl transition">
                        <FaUsers />
                        Customers
                    </button>

                    <button className="w-full flex items-center gap-3 hover:bg-gray-100 text-gray-700 px-4 py-3 rounded-xl transition">
                        <FaDollarSign />
                        Revenue
                    </button>
                </nav>
            </aside>

            {/* Main */}
            <main className="flex-1 p-6">

                {/* Topbar */}
                <div className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between mb-8">

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Dashboard Overview
                        </h2>

                        <p className="text-gray-500 text-sm mt-1">
                            Welcome back 👋
                        </p>
                    </div>

                    <img
                        src="https://i.pravatar.cc/100"
                        alt="user"
                        className="w-12 h-12 rounded-full border-2 border-orange-500"
                    />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">
                                    Total Orders
                                </p>

                                <h3 className="text-3xl font-bold mt-2 text-gray-800">
                                    1,245
                                </h3>
                            </div>

                            <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-2xl">
                                <FaShoppingCart />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">
                                    Products
                                </p>

                                <h3 className="text-3xl font-bold mt-2 text-gray-800">
                                    320
                                </h3>
                            </div>

                            <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center text-2xl">
                                <FaBoxOpen />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">
                                    Customers
                                </p>

                                <h3 className="text-3xl font-bold mt-2 text-gray-800">
                                    890
                                </h3>
                            </div>

                            <div className="w-14 h-14 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center text-2xl">
                                <FaUsers />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">
                                    Revenue
                                </p>

                                <h3 className="text-3xl font-bold mt-2 text-gray-800">
                                    $12.5K
                                </h3>
                            </div>

                            <div className="w-14 h-14 bg-purple-100 text-purple-500 rounded-2xl flex items-center justify-center text-2xl">
                                <FaDollarSign />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl shadow-md mt-8 p-6">

                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-xl font-bold text-gray-800">
                            Recent Orders
                        </h3>

                        <button className="text-orange-500 text-sm font-medium hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">

                            <thead>
                                <tr className="border-b text-gray-500 text-sm">
                                    <th className="py-3">Order ID</th>
                                    <th className="py-3">Customer</th>
                                    <th className="py-3">Product</th>
                                    <th className="py-3">Status</th>
                                    <th className="py-3">Amount</th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-700">

                                <tr className="border-b hover:bg-gray-50 transition">
                                    <td className="py-4">#1025</td>
                                    <td>John Doe</td>
                                    <td>iPhone 15 Pro</td>
                                    <td>
                                        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                                            Completed
                                        </span>
                                    </td>
                                    <td>$999</td>
                                </tr>

                                <tr className="border-b hover:bg-gray-50 transition">
                                    <td className="py-4">#1026</td>
                                    <td>Sarah Khan</td>
                                    <td>MacBook Air</td>
                                    <td>
                                        <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">
                                            Pending
                                        </span>
                                    </td>
                                    <td>$1200</td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition">
                                    <td className="py-4">#1027</td>
                                    <td>Alex Smith</td>
                                    <td>Gaming Mouse</td>
                                    <td>
                                        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                                            Shipping
                                        </span>
                                    </td>
                                    <td>$80</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;