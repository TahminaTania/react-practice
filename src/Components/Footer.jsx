import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsPinterest, BsTwitter } from 'react-icons/bs';
import {BiPhoneCall, BiLocationPlus} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import logo from '../Image/logo.png'

function Footer() {
    return (
        <div className="bg-gradient-to-r from-teal-500 to-green-300 py-[5rem]">
            <div className='max-w-[1540px] mx-auto py-3 px-4 grid lg:grid-cols-3 sm:grid-cols-3 gap-8 text-gray-600'>
                <div>
                    <img src={logo} className="h-15 w-20"/>
                    <p className='py-4'>Cloud production Ltd is dedicated to provide you the very best of services and creative solutions.</p>
                    <div className='my-4'>
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                            <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='.....'/>
                            <button className='bg-green-500 text-white rounded-md font-medium w-[150px] h-full my-6 ml-3 px-6 py-3'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-2 ml-10'>
                        <div>
                            <h3 className='font-medium text-black mt-10'>Company</h3>
                            <div className='flex flex-col py-2'>
                                <NavLink className='text-sm py-2'>About us</NavLink>
                                <NavLink className='text-sm py-2'>Services</NavLink>
                                <NavLink className='text-sm py-2'>Latest News</NavLink>
                            </div>
                        </div>

                        <div>
                            <h3 className='font-medium text-black mt-10'>Support</h3>
                            <div className='flex flex-col py-2'>
                                <NavLink className='text-sm py-2'>FAQ's</NavLink>
                                <NavLink className='text-sm py-2'>Privacy Policy</NavLink>
                                <NavLink className='text-sm py-2'>Terms & Condition</NavLink>
                                <NavLink className='text-sm py-2'>Community</NavLink>
                                <NavLink className='text-sm py-2'>Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='font-medium text-black mt-10'>Address</h3>
                    <div className='flex flex-col py-2'>
                        <NavLink className='text-sm py-2 flex'><span className='px-2'><BiLocationPlus/></span>2nd Floor, 273/3, Dhaka Cantonment, Mirpur Link Road, Dhaka-1206</NavLink>
                        <NavLink className='text-sm py-2 flex'><span className='px-2'><AiOutlineMail/></span>info@cloudproductionltd.com <br/>admin@cloudproductionltd.com</NavLink>
                        <NavLink className='text-sm py-2 flex'><span className='px-2'><BiPhoneCall/></span>Phone: +8801752411182</NavLink>
                        <div className='flex justify-between md:w-[75%] my-6'>
                            <BsFacebook className=' rounded-full' size={25}/>
                            <BsInstagram className='    rounded-full' size={25}/>
                            <BsLinkedin className='   rounded-full' size={25}/>
                            <BsPinterest className='  rounded-full'  size={25}/>
                            <BsTwitter className='   rounded-full'  size={25}/>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
