import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ShoppingCart, Search, Heart, Menu, User } from "lucide-react";

const Navbar = () => {
    const { cart } = useContext(CartContext);

    return (
        <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* ================= LOGO ================= */}
                <div className="flex items-center gap-3">

                    {/* LOGO MARK */}
                    <div className="relative w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-sm">

                        {/* subtle tech accent line */}
                        <div className="absolute inset-0 rounded-xl border border-white/10"></div>

                        {/* inner symbol */}
                        <div className="text-white font-bold text-sm tracking-wide">
                            T
                        </div>

                        {/* small accent dot */}
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>

                    </div>

                    {/* BRAND TEXT */}
                    <h1 className="text-xl font-semibold tracking-tight text-gray-900">
                        Tech<span className="text-orange-500">ora</span>
                    </h1>

                </div>

                {/* ================= MENU ================= */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">

                    {[
                        ["Home", "/"],
                        ["Shop", "/shop"],
                        ["Categories", "/categories"],
                        ["Deals", "/deals"],
                        ["Cart", "/cart"],
                        ["Contact", "/contact"],
                        ["Login", "/login"],
                    ].map(([name, path]) => (
                        <li key={name}>
                            <Link
                                to={path}
                                className="hover:text-gray-900 transition relative"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}

                </ul>

                {/* ================= RIGHT ACTIONS ================= */}
                <div className="flex items-center gap-3">

                    {/* SEARCH */}
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
                        <Search size={18} className="text-gray-600" />
                    </button>

                    {/* WISHLIST */}
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition relative">
                        <Heart size={18} className="text-gray-600" />

                        <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] px-1.5 rounded-full">
                            2
                        </span>
                    </button>

                    {/* CART (PRIMARY ACTION) */}
                    <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition relative">
                        <ShoppingCart size={18} className="text-white" />

                        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] px-1.5 rounded-full">
                            {cart.length}
                        </span>
                    </button>

                    {/* PROFILE */}
                    <button className="hidden md:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center hover:bg-gray-50 transition">
                        <User size={18} className="text-gray-600" />
                    </button>

                    {/* MOBILE MENU */}
                    <button className="md:hidden w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                        <Menu size={20} className="text-gray-600" />
                    </button>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;