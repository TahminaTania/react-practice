import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { cartActions } from '../reduxStore/CartActions'

export default function AddedItems() {
  const cartItems =useSelector(state=> state.cart.itemsList)
  
   let total=0;
   console.log(cartItems,"addedItems here")

 
  cartItems.map(item => {
    total += item.totalPrice;
  });

  return (
    <div className='bg-gray-400 py-20 h-screen grid  place-items-center'>
      {cartItems.length>0 ? (
        <div> 
         <h1 className='text-center my-auto mb-5 text-2xl font-bold'>YOUR ADDED ITEMS......</h1>
      <div >
        {cartItems.map((item,index)=>{
          const {id,name,totalPrice,price,quantity}=item
          return(
            <div key={item.id} className=''>
              <CartItem
                index={index}
                id={id}
                name={name}
                totalPrice={totalPrice}
                price={price}
                quantity={quantity}
              />
           </div>
          )
        })}
      </div>

      <div>
        <div className='float-right  text-2xl font-bold'>Total: ${total}</div>
      </div>
      </div>
    ):(
      <div className='align-content'>
        <div className='bg-green-300 w-fit text-2xl p-3 '>No Item found, please add items </div>
      </div>
    )}
    </div>
  )
}
