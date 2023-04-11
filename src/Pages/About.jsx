import React from 'react'
import about from '../Image/about.jpg'

export default function About() {
  return (
    <section className='h-full'>
        <div className='pt-20'></div>
        <div className='flex justify-center align-middle'>
           <div>
              <h1 className=' uppercase pt-[60px] text-xl font-bold   text-gray-600'> About Us</h1>
              <div className='mt-3 border-b-[7px] border-solid border-green-400 rounded-lg w-[100px]'></div>
           </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 xsm:p-2 bg-gray-200 my-20 mx-10  '>
            <div className='col-span-1 m-[10px]'>
                <img src={about} alt='group cover' className='w-[700px] h-[700px]'/>
            </div>
            <div className='col-span-1 pb-[10px]'>
                <div className=''>
                  <h1 className=' uppercase pt-[60px] text-xl font-bold   text-gray-600'>About Cloud Production LTD.</h1>
                  <div className='mt-3 border-b-[8px] border-solid border-green-300 rounded-lg w-[100px]'></div>
                </div>
                <p className='py-5 pr-3 text-gray-700 font-serif ... text-sm  md:text-[18px] sm:leading-6 lg:leading-8'>At Cloud production Limited, We're dedicated to provide you the very best of innovative and creative products and services that provide total communication and information solutions. With a focus on dependability, customer service and uniqueness we provide a wide range of services like web design and development, tailor made applications, ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, and managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work. We understand that understanding technology leads to "prediction of the future", we believe that understanding of entertainment leads to "understanding of people." <br/> <br/> Cloud production Limited Started from the development of smartphone apps and WEB systems. Currently, focusing on artificial intelligence (AI) and conducting AI research and engineer education in Bangladesh. We support the technology that evolves every day and the lives of people that change every day. We will realize a world that makes people smile with the mechanism of entertainment. As a leader in technology exploring, Cloud production Limited is committed to exporting quality software worldwide. The general purpose of Cloud production Limited is to develop and promote advanced information technologies for multi-user operation. <br/> <br/>Our emphasis is on offering a high degree of product user friendliness through a positive, creative and focused company staff.</p>
            </div>

        </div>
    </section>
  )
}
