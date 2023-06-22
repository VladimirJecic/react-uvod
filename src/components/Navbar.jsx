import React from 'react'
import {BsCartFill} from "react-icons/bs"
//<Link to= stoji umesto <a href=
import {Link} from 'react-router-dom'
function Navbar({cartNum}) {
  // const cartNum = 0;
  return (
    <div className='navBar'>
        <Link to="/">My Store</Link>
        <Link to="/cart" className="cart-items">
          <BsCartFill/>
          <p className="cart-num">{cartNum}</p>
        </Link>
    </div>
  )
}

export default Navbar