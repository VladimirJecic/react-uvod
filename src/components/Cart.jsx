import React from 'react'
import OneProduct from './OneProduct'
// import { useNavigate } from 'react-router-dom' 24:41 snimak o rutiranju

const Cart = ({products}) => {
  
  return (
    <div className='cart-container'>
        <h3>This is your cart.</h3>
        {products.map((prod)=><OneProduct product={prod} key={prod.id} inCart = {1} />)}
    </div>
  )
}

export default Cart