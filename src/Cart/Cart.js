import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, onAdd, onRemove }) => {
  // Order Summary
  const itemsPrice = cartItems.reduce(
    (initialItem, currentItem) =>
      initialItem + currentItem.price * currentItem.qty,
    0
  );

  return (
    <aside>
      {cartItems.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
          <div>
            <button className="minus" onClick={() => onRemove(item)}>
              -
            </button>
            <button> {item.qty}</button>
            <button className="plus" onClick={() => onAdd(item)}>
              +
            </button>
          </div>
          <div>
            <span>Rs {item.price}</span>
            <button>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs {itemsPrice}</span>
      </div>
    </aside>
  );
};

export default Cart;
