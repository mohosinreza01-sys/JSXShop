import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Global Toast System */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/*Navbar */}
      <Navbar />

      {/*Pages Render Here */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>

    </div>
  );
};

export default App;