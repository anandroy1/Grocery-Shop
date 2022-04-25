import { Fragment, useState } from "react";
import Cart from "./Cart/Cart";
import Grocery from "./components/GroceryItem/Grocery";
import Home from "./components/Home/Home";

const App = () => {
  const [show, setShow] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // Adding Items in the cart

  const onAdd = (product) => {
    // console.log(product);
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, qty: exist.qty + (item.qty < 3 ? 1 : 0) }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Removing Items from the cart

  const onRemove = (product) => {
    // console.log(product);
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  return (
    <Fragment>
      <Home countCartItems={cartItems.length} setShow={setShow} />
      {show ? (
        <Grocery onAdd={onAdd} /> //if true it will be render
      ) : (
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} /> //if false it will be render
      )}
    </Fragment>
  );
};

export default App;
