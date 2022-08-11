import { Divider } from "@material-ui/core";
import React from "react";
import "../App.css";

const ProductList = (props) => {
  return (
    <>
      {props.products.map((product, index) => (
        <div>
          <div class="card 3">
            <div class="card_image">
              <img className="img" src={product.imgUrl} alt="Product" />
            </div>
            <div class="card_title">
              <p>{product.name}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
