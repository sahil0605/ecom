import React,{useState,useEffect} from "react";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./Navbar.css";

function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));
  const [cartItemCount, setCartItemCount] = useState(0);

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
          // No items in the cart
          setCartItemCount(0);
        } else if (response.ok) {
          // Parse the response to get the number of items in the cart
          const data = await response.json();
          console.log(data)
          const itemCount = data.cartItems.length;
          setCartItemCount(itemCount);
        }
      } catch (error) {
        console.error("Error fetching cart information:", error);
      }
    };

    // Call the fetchCart function when the component mounts or when the access_token changes
    fetchCart();
  }, [cookies.access_token]);
  const handleLogOut = () => {
    setCookies("access_token", JSON.stringify(""));
    window.localStorage.removeItem("user");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="address">
        <p className="add-1">Deliver to</p>
        <div className="address-icon">
          <FaMapMarkerAlt />
          <p className="add-2">India</p>
        </div>
      </div>
      <div className="search">
        <select className="search-select">
          <option>All</option>
        </select>
        <input
          type="text"
          placeholder="search product"
          className="search-input"
        />
        <div className="search-icon">
          <IoIosSearch />
        </div>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {cookies.access_token?.length > 0 ? (
            <>
              <li>
                <Link to="/sell">Sell</Link>
              </li>

              <li>
                <Link to="/cart">
            
                 <div className="cart-cntr">  
                    <span className="cart-item-count">{cartItemCount}</span>        
                    <FaShoppingCart />
                  </div>  
                </Link>
              </li>
              <li onClick={handleLogOut}>
                <Link to="/">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signin">Signin</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
