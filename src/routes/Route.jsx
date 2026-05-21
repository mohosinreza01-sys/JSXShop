// src/routes/route.jsx

import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Categories from "../pages/Categories";
import Deals from "../pages/Deals";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import ProductDetails from '../components/ProductDetails';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "deals",
        element: <Deals />,
      },

      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;