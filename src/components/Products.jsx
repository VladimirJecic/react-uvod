import React from 'react'
import OneProduct from "./OneProduct.jsx"

const Products = ({products, onAdd, onSub}) => {
  // const name= "Naziv proizvoda";
  // const desc = "Ovo je malo duzi opis proizvoda";
  // const product = {
  //   title: name,
  //   description: desc,
  // }

  

  return (
    <div className='all-products'>
        {/* <OneProduct product={products[0]}/>
        <OneProduct product={products[1]}/>
        <OneProduct product={products[2]}/> */}
      {products.map((prod)=><OneProduct product={prod} key={prod.id} onAdd={onAdd} onSub={onSub} inCart= {0}/>)}

    </div>
  )
}

export default Products