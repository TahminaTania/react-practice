import React from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { cartActions } from '../reduxStore/CartActions'
import { useDispatch } from 'react-redux'

export default function CartItem({index,name,id,totalPrice,price,quantity}) {
   const dispatch=useDispatch();
  const Increment=()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))

  }
  const Decrement=()=>{
    dispatch(cartActions.removeFromCart(id))
    
  }
  return (
    <div className='grid grid-cols-4 text-center bg-slate-200  border-spacing-5 py-5 mx-5 my-3'>
              <div> {index+1}. {name}</div>
              <div>{price}</div>
              <div>{totalPrice}</div>
              <div className='flex justify-around'>
                <div onClick={Increment}><AiOutlinePlus/></div> 
                <div>{quantity}</div> 
                <div onClick={Decrement}><AiOutlineMinus/></div> 
              </div> 
    </div>
  )
}
