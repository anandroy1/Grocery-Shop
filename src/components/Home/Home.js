import React from "react";
import "./Home.css";

const Home = ({ setShow, countCartItems }) => {
  return (
    <nav>
      <div className="home_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          GroceryShop
        </span>
        <input
          type="text"
          style={{ width: 350, height: 25 }}
          placeholder="Search a product"
        />
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{countCartItems}</span>
        </div>
      </div>
    </nav>
  );
};

export default Home;
