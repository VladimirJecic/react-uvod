import './App.css';
import Navbar from "./components/Navbar";
import Products from "./components/Products"
import {useState} from 'react';
function App() {
  //let cartNum = 0;
  // const [state, setsState] = useState(initialState)
  const [cartNum, setCartNum] = useState(0);
  const products = [
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ];
  function addProduct(title){
    console.log("Dodat je proizvod: "+title);
    // cartNum++;
    setCartNum(cartNum+1);//kada se pozove,izvrsavace se u pozadini
    console.log(cartNum);//dok ce ovaj red da se izvrsi pre nego stignemo da azuriramo broj proizvoda u korpi,
    //sto znaci da ce logovan broj u konzoli uvek zaostajati za jedan u odnosu na broj na ekranu
  }
  return (
    <div className="App">
      <Navbar cartNum = {cartNum}></Navbar>
      <Products products={products} onAdd={addProduct}/>
    </div>
  );
}

export default App;
