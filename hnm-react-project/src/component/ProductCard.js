import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="card-wrap">
      <img src={item?.img} className="img-wrap" />
      <div>{item?.choice == true ? "Conscious choice" : " "}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true ? "신제품" : " "}</div>
    </div>
  );
};

export default ProductCard;
