import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Individual from "./Pages/Individual";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";


import "./index.css";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Services from "./Pages/Services";
import { useSelector } from "react-redux";
import AddedItems from "./Pages/AddedItems";


const Layout =()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <div><Home/></div>,
      },
      {
        path: "/blog",
        element: <div><Blog/></div>,
      },
      {
        path: "/contact",
        element: <div><Contact/></div>,
      },
      {
        path: "/services",
        element: <div><Services/></div>,
      },
      {
        path: "/about",
        element: <div><About/></div>,
      },
      {
        path: "/post/:id",
        element: <div>Individual</div>,
      },
    ]

  },
  {
    path: "/Register",
    element: <div><Register/></div>,
  },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "/cart",
    element: <div><AddedItems/></div>,
  },

]);

function App() {
  const cartItems=useSelector((state)=> state.cart.itemsList)
  console.log(cartItems);

  return (
    <div>
        <RouterProvider router={router} />

    </div>
  );
}

export default App;



