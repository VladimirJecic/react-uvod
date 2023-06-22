import React from 'react';
//stavljam {} zato sto zelim tacno tu ikonicu
import photo from "../img/picsum.photos.200.jpg"
import {BsPlusLg,BsDash} from "react-icons/bs";

//za CSS koristimo camelCase notaciju 
//interni CSS kao promenljiva
//ili inline CSS, ali onda obavezno {{duple zagrade}}

//DESTRUKTURIRANJE OBJEKTA,stavili smo {product} umesto props, da bi dobili samo delove objekta koji je primljen
function OneProduct({product, onAdd,onSub, inCart}) {
  const stil = {margin: 1.1+"em", borderStyle: "dotted"};
  // console.log(product);
  // function onAdd(title){
    //   console.log("Dodat proizvod "+title);
    // }
    /* koncept u reactu poznat kao podizanje na gore */
  return (
    <div className={inCart === 1 ? "card-cart":"card"} style={stil}>
        <img className={inCart === 1 ? "card-img-left":"card-img-top"} src={photo} alt="Neka slika" />
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
        </div>
        {inCart === 1 ? 
        <h4>Amount: {product.amount}</h4>
        :
        <>
        <button className="btn" onClick={()=>onAdd(product.title,product.id)}>
         <BsPlusLg/>
        </button>
        <button className="btn" onClick={()=>onSub(product.title,product.id)}>
          <BsDash/>
        </button>
        </>
      }
    </div>
  )
}

export default OneProduct