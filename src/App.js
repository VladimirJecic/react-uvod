import './App.css';
import Navbar from "./components/Navbar";
import Products from "./components/Products"
import Cart from "./components/Cart"
import { useState } from 'react';
//mozemo da koristimo aliase npr BrowserRouter as BRouter
//Routes je nesto poput switch,a pojedinacan Route kao case
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  //let cartNum = 0;
  // const [state, setsState] = useState(initialState)
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] =useState(
    [
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
  ]);
  function addProduct(title,id) {
    console.log("Dodat je proizvod: " + title);
    // cartNum++;
    setCartNum(cartNum + 1);//kada se pozove,izvrsavace se u pozadini
    console.log(cartNum);//dok ce ovaj red da se izvrsi pre nego stignemo da azuriramo broj proizvoda u korpi,
    //sto znaci da ce logovan broj u konzoli uvek zaostajati za jedan u odnosu na broj na ekranu
    // products.forEach((prod)=>{
    //   if(prod.id === id){
    //     prod.amount++;
    //   }
    // });
    setProducts(products=>{
      const updatedProducts= products.map((prod)=> prod.id === id ? { ...prod, amount: prod.amount + 1 } : prod);  //... is a spread syntax. By creating a new object instead of directly modifying the existing prod object, you ensure that you are updating the state immutably, which is a recommended practice in React. This helps maintain the integrity of the state and avoids unintended side effects.
      setCartProducts(updatedProducts.filter((prod)=> prod.amount > 0 ));
      return updatedProducts;
    });  
  }
  function subtractProduct(title,id) {
    console.log("Oduzet je proizvod: " + title);
    setCartNum(cartNum > 0 ? cartNum-1 : cartNum );
    console.log(cartNum);
    setProducts(products=>{
      const updatedProducts= products.map((prod)=> prod.id === id ? { ...prod,  amount: prod.amount >0 ? prod.amount - 1 : 0 } : prod);  //... is a spread syntax. By creating a new object instead of directly modifying the existing prod object, you ensure that you are updating the state immutably, which is a recommended practice in React. This helps maintain the integrity of the state and avoids unintended side effects.
      setCartProducts(updatedProducts.filter((prod)=> prod.amount > 0 ));
      return updatedProducts;
    });  
   
  }
  return (
    <BrowserRouter className="App">
      <Navbar cartNum={cartNum}></Navbar>
      <Routes>
        <Route path="/"
          element={<Products products={products} onAdd={addProduct} onSub={subtractProduct} />} 
        />
        <Route path="/cart/*"
          element={<Cart  products={cartProducts}></Cart>} 
          // <Route path="/cart/:id"  element={<Cart></Cart>} />
        />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
