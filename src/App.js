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
import Edit from "./Pages/Edit";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Resources from "./Pages/Resources";

import "./index.css";
import Register from "./Pages/Register";
import About from "./Pages/About";


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
        path: "/resources",
        element: <div><Resources/></div>,
      },
      {
        path: "/about",
        element: <div><About/></div>,
      },
      {
        path: "/post/:id",
        element: <div><Edit/></div>,
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

]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />

    </div>
  );
}

export default App;



