import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./Item.css";
import { useCookies } from "react-cookie";

function Item() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cookies, setCookies] = useCookies(["access_token"]);

  useEffect(() => {
    // Fetch user's cart items when the component mounts
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/cart/${user._id}/items`,
          {
            headers: { authorization: cookies.access_token },
          }
        );
        setCartItems(response.data.cartItems);
        console.log("got it");
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();

    axios
      .get(`http://localhost:5000/api/user/getItem/${type}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.items[0]._id);
        setProducts(response.data.items);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [type, user._id]);

  const addCartHandler = async (itemId) => {
    try {
      // Check if the item is already in the cart
      const isItemInCart =
        cartItems &&
        Array.isArray(cartItems) &&
        cartItems.some((item) => item.productId === itemId);

      if (isItemInCart) {
        // Make a DELETE request to remove the item from the cart
        const response = await axios.delete(
          `http://localhost:5000/api/user/cart/${user._id}/items/${itemId}`,
          {
            data: { itemId: itemId },
          }
        );

        console.log("Item removed from cart:", response.data);
        // setTimeout(() => {
        //   navigate("/");
        // }, 1500);
      } else {
        // Make a POST request to add the item to the cart
        const response = await axios.post(
          "http://localhost:5000/api/user/addItemToCart",
          {
            userId: user._id,
            itemId: itemId,
          }
        );

        console.log("Item added to cart:", response.data);
      }
      window.location.reload();
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

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
            <button
              onClick={() => addCartHandler(product._id)}
             style={{backgroundColor:cartItems.some((item) => item.productId === product._id)
              ? "yellow"
              : "green"}}
            >
              {cartItems.some((item) => item.productId === product._id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
