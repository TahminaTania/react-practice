import React from 'react'
import Banner from '../Components/Banner'
import Slick from '../Components/Slick'
import Sollutions from '../Components/Sollutions'

import ai from '../Image/ArtificialIntelligence.png'
import consult from '../Image/consult.png'
import ei from '../Image/export.png'
import education from '../Image/education.png'

const Data=[
    {   
        id:1,
        pic:`${ai}`,
        title:"Artificial Intelligence",
        paragraph:" Cloud Production Limited is bringing artificial intelligence and machine learning within reach of commercial, government, and nonprofit organizations."
    },
    {   
        id:2,
        pic:`${consult}`,
        title:"Consultancy & Investment",
        paragraph:"We help you in the areas of investment, AI integration, Software Development, Export import, Mobile App development, Academic guideline and all IT related supports."
    },
    {    
        id:3,
        pic:`${education}`,
        title:"Education & Training",
        paragraph:"Cloud Production Ltd is mainly focusing the IT related business besides with many other businesses. We build awesome systems to make our honorable clients happy and try to make their business reliable with advice and by developing product."
    },
    {   
        id:4,
        pic:`${ei}`,
        title:"Export & Import",
        paragraph: "After carefully analyzing the market and customer requirements Cloud production have launched a Business to Customer (B2C) market place to sell products directly from vendors to customers in Bangladesh."

    }
]



export default function Home() {
  return (


        <div className=''>
          {/* <Banner/> */}
          <Slick Data={Data}/>
          <Sollutions>
            <div className='text-center mx-auto  p-10'>
                <h1 className='py-2 sm:text-5xl xsm:text-3xl'>Our <span className='text-green-600'>Solutions</span></h1>
                <p className='py-2 px-5 text-gray-600 text-center sm:text-xl sm:leading-7 xsm:text-sm xsm:leading-4'>We emphasis on offering a high degree of product user friendliness <br/>through by crafting the digital growth of all sized businesses with our solutions. <br/>We serve digital ease fresh and creative solutions.</p>
            </div>
            </Sollutions>
        </div>

  )
}
