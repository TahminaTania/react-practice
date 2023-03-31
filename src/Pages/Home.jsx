import React from 'react'
import Banner from '../Components/Banner'
import Slick from '../Components/Slick'
import Sollutions from '../Components/Sollutions'

export default function Home() {
  return (
    <div className=''>
      <Banner/>
      <Slick/>
      <Sollutions>
        <div className='text-center max-w-[1240px] mx-auto  p-10'>
            <h1 className='py-2 text-5xl'>Our <span className='text-green-600'>Solutions</span></h1>
            <p className='py-2 px-5 text-gray-600 text-center leading-7'>We emphasis on offering a high degree of product user friendliness <br/>through by crafting the digital growth of all sized businesses with our solutions. <br/>We serve digital ease fresh and creative solutions.</p>
        </div>
        </Sollutions>

    </div>
  )
}
