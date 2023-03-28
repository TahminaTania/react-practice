import React from 'react'
import { AiOutlineClose,AiOutlineMenu,AiOutlineUser} from "react-icons/ai";
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import logo from '../Image/logo.png'

function Navbar() {
    const [menu,Setmenu]=useState(false);

    const handleMenu=()=>{
        Setmenu(!menu)
    }



    return (
       <div className='bg-blue-700'>    
            <div className='grid grid-cols-4 gap-2 h-20 w-full mx-auto  px-4 text-white'>
                <div className='flex my-auto'>
                    <img src={logo} className="h-10 w-15"/>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO.</h1>
                </div>

                <div className='my-auto lg:col-span-2 sm:col-span-0 md:col-span-2'>
                    <div className='hidden md:flex justify-between'>
                            <NavLink to={'/'} className='p-4 font-bold'>Home</NavLink>
                            <NavLink to={'/blog'} className='p-4 font-bold'>Blog</NavLink>
                            <NavLink to={'/resouces'} className='p-4 font-bold'>Resources</NavLink>
                            <NavLink to={'/about'} className='p-4 font-bold'>About</NavLink>
                            <NavLink to={'/contact'} className='p-4 font-bold'>Contact</NavLink>
                    </div>
                </div>

                <div className='my-auto sm:col-span-2 flex ml-[50%] pl-4 md:col-span-1'>
                    <button className='flex whitespace-nowrap justify-center bg-green-900 rounded-md px-4 py-2  font-bold md:float-right sm:float-left'><span><AiOutlineUser/></span> Sign In</button>
                </div>
            </div>


            <div onClick={handleMenu} className='block md:hidden  float-right mt-[-10%] text-white' >
                {menu ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35} />}
            </div>
            <div>
                <div className=''>
                    <div className={menu ? 'flex flex-col fixed text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] opacity-0'}>
                           
                            <NavLink to={"/"} className='p-4 border-b border-gray-600 text-white'>Home</NavLink >
                            <NavLink to={"/blog"} className='p-4 border-b border-gray-600'>Blog</NavLink >
                            <NavLink to={"/resources"} className='p-4 border-b border-gray-600'>Resources</NavLink >
                            <NavLink to={"/about"} className='p-4 border-b border-gray-600'>About</NavLink >
                            <NavLink to={"/contact"} className='p-4'>Contact</NavLink >
                        </div>
            </div>


            </div>


       </div>
    )
}

export default Navbar
