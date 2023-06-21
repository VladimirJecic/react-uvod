import React from 'react';
//stavljam {} zato sto zelim tacno tu ikonicu
import {BsPlusLg,BsDash} from "react-icons/bs";

//za CSS koristimo camelCase notaciju 
//interni CSS kao promenljiva
//ili inline CSS, ali onda obavezno {{duple zagrade}}

//DESTRUKTURIRANJE OBJEKTA,stavili smo {product} umesto props, da bi dobili samo delove objekta koji je primljen
function OneProduct({product, onAdd}) {
  const stil = {margin: 1.1+"em", borderStyle: "dotted"};
  // console.log(product);
  // function onAdd(title){
  //   console.log("Dodat proizvod "+title);
  // }
  return (
    <div className="card" style={stil}>
        <img className="card-img-top" src="https:/picsum.photos/200" alt="Neka slika" />
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
        </div>
        {/* koncept u reactu poznat kao podizanje na gore */}
        <button className="btn" onClick={()=>onAdd(product.title)}>
         <BsPlusLg/>
        </button>
        <button className="btn">
          <BsDash/>
        </button>
    </div>
  )
}

export default OneProduct