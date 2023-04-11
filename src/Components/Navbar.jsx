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
       <div className=' z-10 bg-blue-900 max-w-[1800] fixed w-full'>    
            <div className='z-10 grid grid-cols-4 gap-2 h-20 w-full mx-auto  px-4 text-white'>
                <div className='flex my-auto'>
                    <img src={logo} className="h-15 w-20"/>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO.</h1>
                </div>

                <div className='my-auto lg:col-span-2 sm:col-span-0 md:col-span-2'>
                    <div className='hidden md:flex justify-between'>
                            <NavLink to={'/'} className='p-4 font-bold'>Home</NavLink>
                            <NavLink to={'/blog'} className='p-4 font-bold'>Blog</NavLink>
                            <NavLink to={'/services'} className='p-4 font-bold'>Services</NavLink>
                            <NavLink to={'/about'} className='p-4 font-bold'>About</NavLink>
                            <NavLink to={'/contact'} className='p-4 font-bold'>Contact</NavLink>
                    </div>
                </div>

                <div className='my-auto col-span-2  md:col-span-1 '>
                  
                        <a href="/login" className="relative md:float-right sm:float-left bg-green-500 text-white rounded-md font-medium  h-full md:px-6 md:py-3 xsm:px-3 xsm:py-2  inline-flex items-center justify-center hover:font-bold duration-[2s]  overflow-hidden text-medium group" >
                            <span className="absolute w-0  transition-all duration-700 ease-out bg-purple-500 rounded group-hover:w-full group-hover:h-full"></span>
                            <span className="relative flex whitespace-nowrap"><span><AiOutlineUser/></span>Sign In</span>
                        </a>
                   
                    {/* <button className='flex whitespace-nowrap justify-center bg-purple-700 rounded-md px-4 py-2  font-bold md:float-right sm:float-left'><span><AiOutlineUser/></span> Sign In</button> */}
                </div>
            </div>


            <div onClick={handleMenu} className='block md:hidden  float-right mt-[-10%] text-white' >
                {menu ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35} />}
            </div>
            <div>
                <div className=''>
                    <div className={menu ? 'z-10 flex flex-col fixed text-white left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%]  opacity-0'}>
                           
                            <NavLink to={"/"} className='p-4 border-b border-gray-600 text-white' onClick={(e)=>Setmenu(false)}>Home</NavLink >
                            <NavLink to={"/blog"} className='p-4 border-b border-gray-600' onClick={(e)=>Setmenu(false)}>Blog</NavLink >
                            <NavLink to={"/services"} className='p-4 border-b border-gray-600' onClick={(e)=>Setmenu(false)}>Services</NavLink >
                            <NavLink to={"/about"} className='p-4 border-b border-gray-600' onClick={(e)=>Setmenu(false)}>About</NavLink >
                            <NavLink to={"/contact"} className='p-4' onClick={(e)=>Setmenu(false)}>Contact</NavLink >
                        </div>
            </div>


            </div>


       </div>
    )
}

export default Navbar
