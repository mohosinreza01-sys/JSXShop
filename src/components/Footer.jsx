import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaArrowRight,
} from "react-icons/fa";

import {
    FiTruck,
    FiShield,
    FiZap,
    FiHeadphones,
    FiArrowUpRight,
} from "react-icons/fi";


const Footer = () => {
    return (
        <>
            {/* PRE FOOTER */}

            {/* FEATURE CARDS */}
            {/* FEATURE SECTION */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* BOX 1 */}
                        <div className="group border border-gray-200 rounded-3xl p-7 bg-white hover:border-orange-500 hover:shadow-xl transition-all duration-300">

                            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                <FiTruck />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Free Shipping
                            </h3>

                            <p className="text-gray-500 leading-7 text-sm">
                                Free worldwide shipping on all premium electronic products.
                            </p>
                        </div>

                        {/* BOX 2 */}
                        <div className="group border border-gray-200 rounded-3xl p-7 bg-white hover:border-orange-500 hover:shadow-xl transition-all duration-300">

                            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                <FiShield />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Secure Payment
                            </h3>

                            <p className="text-gray-500 leading-7 text-sm">
                                Safe payment system with trusted and secure checkout.
                            </p>
                        </div>

                        {/* BOX 3 */}
                        <div className="group border border-gray-200 rounded-3xl p-7 bg-white hover:border-orange-500 hover:shadow-xl transition-all duration-300">

                            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                <FiZap />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Fast Delivery
                            </h3>

                            <p className="text-gray-500 leading-7 text-sm">
                                Lightning-fast delivery with real-time tracking support.
                            </p>
                        </div>

                        {/* BOX 4 */}
                        <div className="group border border-gray-200 rounded-3xl p-7 bg-white hover:border-orange-500 hover:shadow-xl transition-all duration-300">

                            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                <FiHeadphones />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                24/7 Support
                            </h3>

                            <p className="text-gray-500 leading-7 text-sm">
                                Dedicated support team ready to help anytime you need.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#020617] text-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-16">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* BRAND */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Electro.
                            </h2>

                            <p className="text-sm leading-7 text-gray-400">
                                Premium electronics ecommerce store with modern gadgets,
                                accessories, and next-generation technology products.
                            </p>

                            <div className="flex items-center gap-4 mt-6">

                                <a
                                    href="/"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-all duration-300"
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href="/"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-all duration-300"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="/"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-all duration-300"
                                >
                                    <FaTwitter />
                                </a>

                                <a
                                    href="/"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-all duration-300"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        {/* SHOP */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-5">
                                Shop
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Laptops
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Smartphones
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Headphones
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Smart Watches
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Accessories
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* SUPPORT */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-5">
                                Support
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Contact Us
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        FAQ
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Shipping
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Returns
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="hover:text-orange-400 transition">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-5">
                                Contact
                            </h3>

                            <div className="space-y-4 text-sm text-gray-400">
                                <p>Mymensingh, Bangladesh</p>
                                <p>support@electro.com</p>
                                <p>+880 1234-567890</p>
                            </div>

                            <div className="mt-6">
                                <h4 className="text-white font-medium mb-3">
                                    Payment Methods
                                </h4>

                                <div className="flex gap-3">
                                    <div className="bg-white/10 px-3 py-2 rounded-lg text-xs">
                                        VISA
                                    </div>

                                    <div className="bg-white/10 px-3 py-2 rounded-lg text-xs">
                                        PayPal
                                    </div>

                                    <div className="bg-white/10 px-3 py-2 rounded-lg text-xs">
                                        Stripe
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-sm text-gray-500">
                            © 2026 Electro. All Rights Reserved.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <a href="/" className="hover:text-orange-400 transition">
                                Terms
                            </a>

                            <a href="/" className="hover:text-orange-400 transition">
                                Privacy
                            </a>

                            <a href="/" className="hover:text-orange-400 transition">
                                Security
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;