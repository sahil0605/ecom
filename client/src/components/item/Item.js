import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Item.css'

function Item() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/getItem/${type}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.items);
        setProducts(response.data.items);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [type]);

  console.log("Products:", products);

  return (
    <div className="container">
      {products.map((product, index) => (
        <div key={index} className="product-box">
          <img className="product-image" src={product.pic} alt={product.name} />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
