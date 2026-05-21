import { useState } from "react";
import { registerUser } from "../firebase/authService";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return alert("Passwords do not match!");
        }

        try {
            await registerUser(formData.email, formData.password);

            alert("User registered successfully!");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center px-4 py-10">

            {/* Card */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm">
                        Join with us and start shopping
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleRegister} className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            placeholder="Choose a username"
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter phone number"
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4 accent-orange-500"
                            required
                        />

                        <p className="text-sm text-gray-600">
                            I agree to the Terms & Conditions
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Create Account
                    </button>
                </form>

                {/* Bottom Text */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?

                    <Link
                        to="/login"
                        className="text-orange-500 font-medium ml-1 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;