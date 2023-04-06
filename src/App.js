import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { Fragment, useState } from "react";



function App() {
  
  const [cartIsShown, setcartIsShown] = useState(false)

  const showCartHandler = ()=>{
    setcartIsShown(true);
  }

  const hideCartHandler = ()=>{
    setcartIsShown(false)
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
