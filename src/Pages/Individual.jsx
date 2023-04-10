import React from 'react'
import {MdOutlineFavoriteBorder, MdOutlineShoppingCart , MdOutlineSearch} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../reduxStore/CartActions';

export default function Individual(props) {
  const { id,name,productImage,price}=props.item;
  const dispatch =useDispatch();
  const addToCart=()=>{
    console.log("add to cart clicked")
    dispatch(
      cartActions.addToCart({
        name,id,price
      })
    )
  }
  return (
    <article key={id} className='menu-item m-5 '>
        <div className='item-box'>
          <div className='flex align-middle justify-center'><img src={productImage} alt={name} className='photo'/></div>
          <div className='items-icon'>
            <MdOutlineFavoriteBorder className='icn'/>
            <MdOutlineSearch className='icn'/>
            <MdOutlineShoppingCart className='icn' onClick={addToCart}/>
          </div>
        </div>
        <div className='item-info'>
            <h4>{name}</h4>
            <h4 className='price'>{price} $</h4>
        </div>
   </article>
  )
}
