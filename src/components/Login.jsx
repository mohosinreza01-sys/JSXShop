import { useState } from "react";
import { loginUser, googleLogin } from "../firebase/authService";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);

      alert("Login successful!");

      navigate("/dashboard");

    } catch (err) {
      alert(err.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();

      alert("Google Login successful!");

      navigate("/dashboard");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            Login to your account
          </p>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full h-12 border border-gray-300 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition duration-300 mb-5"
        >
          <FcGoogle className="text-2xl" />

          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <span className="text-sm text-gray-400">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-orange-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?

          <Link
            to="/contact"
            className="text-orange-500 font-medium ml-1 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;