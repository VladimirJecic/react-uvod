import React from 'react';
//stavljam {} zato sto zelim tacno tu ikonicu
import {BsPlusLg,BsDash} from "react-icons/bs";

//za CSS koristimo camelCase notaciju 
//interni CSS kao promenljiva
//ili inline CSS, ali onda obavezno {{duple zagrade}}
function OneProduct() {
  const stil = {margin: 1.1+"em", borderStyle: "dotted"};
  return (
    <div className="card" style={stil}>
        <img className="card-img-top" src="https:/picsum.photos/200" alt="Neka slika" />
        <div className="card-body">
            <h3 className="card-title">Product name</h3>
            <p className="card-text">This is description of the products.</p>
        </div>
        <button className="btn">
         <BsPlusLg/>
        </button>
        <button className="btn">
          <BsDash/>
        </button>
    </div>
  )
}

export default OneProduct