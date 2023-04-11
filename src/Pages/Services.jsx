import React, { useState } from 'react'
import { PRODUCTS } from '../StoreData'
import Individual from './Individual'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import AddedItems from './AddedItems';
import { cartActions } from '../reduxStore/CartActions';
import { NavLink } from 'react-router-dom';

export default function Services() {

   const[Iscart, setIscart]=useState(true)
  
  const quantity=useSelector((state)=> state.cart.totalQuantity);
  const dispatch=useDispatch();

 
  return (
    <section className='pt-20'>
      <div className=' h-full w-full bg-teal-100 pb-20'>
        <div className='py-10 flex flex-row-reverse mr-5' onClick={(e)=>setIscart(!Iscart)}><NavLink to={"/cart"}><AiOutlineShoppingCart size={30}/></NavLink><span className='bg-red-600 h-5 w-5 rounded-full flex justify-center font-bold text-sm'>{quantity}</span></div>

            {/* {Iscart ? ( */}
            <div className='bg-white my-10 grid gap-8 lg:mx-[10%] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center'>
              {PRODUCTS.map((item,index)=>{
                return(
                  <div key={index}> 
                    <Individual item={item}/>
                </div>
                )
              })}
            </div>
            {/* ):("")
            // (
            //   <section className='bg-black h-screen'>
            //     <div className='py-[20px] h-full bg-red-200 lg:mx-[10%]'>
            //       <AddedItems  /> 
            //     </div>
            //   </section>
            // )
            } */}
               
      </div>




    </section>
  )
}
