import React from 'react';
import { FaMapMarkerAlt,FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {Link} from 'react-router-dom'

import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <Link to='/'>Logo</Link>
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
          <input type="text" placeholder="search product" className="search-input" />
          <div className="search-icon">
            
          <IoIosSearch />
          </div>
        </div>
        <div className='list'>
            <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/sell'>Sell</Link>
            </li>
            <li>
                <Link to='/signin'>Signin</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
            <li>
            <Link to='/cart'>
              <FaShoppingCart />
            </Link>
          </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;


