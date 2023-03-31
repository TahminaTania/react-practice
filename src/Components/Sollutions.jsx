import React from 'react'
import vendor from '../Image/offers/vendor.png'
import system from '../Image/offers/system.png'
import jobs1 from '../Image/offers/jobs1.png'
import hr from '../Image/offers/hr.png'
import graphs from '../Image/offers/graphs.png'
import connection from '../Image/offers/connection.png'


export default function Sollutions() {
  return (
 <section className='w-full py-[5rem]  font-sans '>
     <div className='w-full bg-gradient-to-r from-cyan-100 to-white pt-5 pb-20'>        
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 grid-rows-2 gap-8  mt-10'>
            <div className='w-full shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300 bg border-dotted border-2  bg-white hover:bg-gradient-to-r from-teal-400 to-green-200 '>
                <div className='py-3 px-3'>
                    <img className="w-50 mx-auto mt-[-1rem]" src={system}/>
                    <h3 className="text-xl font-bold text-center py-8 text-gray-600">Evaluation Management System</h3>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300 bg border-dotted border-2  bg-white hover:bg-gradient-to-r from-teal-400 to-green-200'>
                <div className='py-3 px-3'>
                    <img className="w-50 h-[8rem] mx-auto mt-[-1rem]" src={jobs1}/>
                    <h3 className="text-xl font-bold text-center py-8 text-gray-600">Careers-trip for Recruiter and Job Seeker</h3>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300 bg border-dotted border-2  bg-white hover:bg-gradient-to-r from-teal-400 to-green-200'>
                <div className='py-3 px-3'>
                    <img className="w-50 mx-auto mt-[-1rem]" src={hr}/>
                    <h3 className="text-xl font-bold text-center py-8 text-gray-600">Human Resource(HR) Management System</h3>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300 bg border-dotted border-2  bg-white hover:bg-gradient-to-r from-teal-400 to-green-200 '>
                <div className='py-3 px-3'>
                    <img className="w-50 mx-auto mt-[-1rem]" src={graphs}/>
                    <h3 className="text-xl font-bold text-center py-8 text-gray-600">Requisition Management System</h3>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300 bg border-dotted border-2  bg-white hover:bg-gradient-to-r from-teal-400 to-green-200'>
                <div className='py-3 px-3'>
                    <img className="w-50 mx-auto mt-[-1rem]" src={connection}/>
                    <h3 className="text-xl font-bold text-center py-8 text-gray-600">BtoB Ecommerce Multi-Vendor Market Place</h3>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300 bg border-dotted border-2  bg-white hover:bg-gradient-to-r from-teal-400 to-green-200'>
                <div className='py-3 px-3'>
                    <img className="w-50 mx-auto mt-[-1rem]" src={vendor}/>
                    <h3 className="text-xl font-bold text-center py-8 text-gray-600">BtoB Ecommerce Multi-Vendor Market Place</h3>
                </div>
            </div>
        </div>
     </div>
 </section>
  )
}
