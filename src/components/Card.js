import React from "react";

const Card = ({ item, onAdd }) => {
  const { name, description, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{description}</p>
        <p>Price: Rs {price} </p>
        <button onClick={() => onAdd(item)}> + Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
