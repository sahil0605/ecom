import React, { useState,useEffect } from "react";
import { useCookies } from "react-cookie";
function Cart() {
  const [items, setItems] = useState([]);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );
  useEffect(() => {
    // Fetch cart information from the backend
    const fetchCart = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/cart/${user._id}/items`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${cookies.access_token}`
          }
        });

        if (response.status === 404) {
          alert("no items")
        } else if (response.ok) {
          // Parse the response to get the number of items in the cart
          const data = await response.json();
          console.log(data.cartItems)
          setItems(data.cartItems);
          // console.log(items)
        }
      } catch (error) {
        console.error("Error fetching cart information:", error);
      }
    };

    // Call the fetchCart function when the component mounts or when the access_token changes
    fetchCart();
  }, [cookies.access_token]);
  
 
  return (
  <div>hii</div>
  );
}

export default Cart;
