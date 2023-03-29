import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";  
import { BsChevronLeft, BsChevronRight} from "react-icons/bs";

import ai from '../Image/ArtificialIntelligence.png'
import consult from '../Image/consult.png'
import ei from '../Image/export.png'
import education from '../Image/education.png'
import { useRef } from "react";


export default function Slick() {
    const slider = React.useRef(null);

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

       
            <Slider  className="col-span-5 h-full " ref={slider} {...settings}>
            <div className="flex align-middle justify-center  bg-gradient-to-l from-cyan-100 to-white ">
                <div className="grid grid-cols-2 mt-[12%] ">
                    <div className="p-2 items-center">
                        <h2 className="text-4xl bold md:text-5xl  py-5">Export & Import</h2>
                        <p className="py-3 text-gray-700 font-serif ... text-sm  md:text-[18px] sm:leading-6 lg:leading-8">After carefully analyzing the market and customer requirements Cloud production have launched a Business to Customer (B2C) market place to sell products directly from vendors to customers in Bangladesh.</p>
                        <button className="bg-green-500 text-white rounded font-semibold  my-6 mx-auto px-6 py-3">We like to hear from you</button>
                    </div>
                    <div className="my-auto object-cover lg:h-48 lg:w-96 md:h-45 md:h-96 sm:h-55 sm:w-30..."><img src={ei}/></div>

                </div>
            </div>


            <div>
                <h3 ><img src={ai}/></h3>
            </div>
            <div>
                <h3 className="text-9xl flex justify-center">3</h3>
            </div>
            <div>
                <h3 className="text-9xl flex justify-center">4</h3>
            </div>
            <div>
                <h3 className="text-9xl flex justify-center">5</h3>
            </div>
            </Slider>
        

        <div className="col-span-1  my-auto ">
            <button onClick={() => slider?.current?.slickNext()} className="float-right px-3  text-blue-700"><BsChevronRight size={50}/></button>
        </div>

        </div>
    </div>

  );
}




// Education & Training
// Cloud Production Ltd is mainly focusing the IT related business besides with many other businesses. We build awesome systems to make our honorable clients happy and try to make their business reliable with advice and by developing product.
// Artificial Intelligence
// Cloud Production Limited is bringing artificial intelligence and machine learning within reach of commercial, government, and nonprofit organizations.
