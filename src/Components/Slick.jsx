import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";  
import { BsChevronLeft, BsChevronRight} from "react-icons/bs";
import ai from '../Image/ArtificialIntelligence.png'
import consult from '../Image/consult.png'
import ei from '../Image/export.png'
import education from '../Image/education.png'

// import {Typed,Data} from './data'
import { useRef } from "react";

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

export default function Slick() {
    const slider = React.useRef(null);
    console.log(Data.pic,"this data")

  var settings = {
    dots: true ,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
   <div className=" w-full h-full   py-[10rem] "> 
    <div className="grid grid-cols-7 my-auto h-full">

        <div className="col-span-1  my-auto">
             <button onClick={() => slider?.current?.slickPrev()} className="px-3 text-blue-700"><BsChevronLeft size={50}/></button>
        </div>


            <Slider  className="col-span-5 h-full" ref={slider} {...settings}>

                {Data.map((data)=>{
                     const {pic,title,paragraph} =data 

  
                    return (
                        <div className="flex align-middle justify-center  bg-gradient-to-l from-cyan-100 to-white ">
                            <div className="grid grid-cols-2 mt-[12%] ">
                                <div className="p-2 items-center">
                                    <h2 className="text-4xl bold md:text-5xl  py-5">{title}</h2>
                                    <p className="py-3 text-gray-700 font-serif ... text-sm  md:text-[18px] sm:leading-6 lg:leading-8">{paragraph}</p>
                                    <button className="bg-green-500 text-white rounded font-semibold  my-6 mx-auto px-6 py-3">We like to hear from you</button>
                                </div>
                                <div className="mx-auto object-cover lg:h-48 lg:w-96 md:h-45 md:h-96 sm:h-55 sm:w-30..."><img src={pic}/></div>
                            </div>
                        </div>
                           );
                        })}  


            </Slider>
        

        <div className="col-span-1  my-auto ">
            <button onClick={() => slider?.current?.slickNext()} className="float-right px-3  text-blue-700"><BsChevronRight size={50}/></button>
        </div>

        </div>
    </div>

  );
}




// 
// 





