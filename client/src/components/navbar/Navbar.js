import React from 'react';
import { FaMapMarkerAlt,FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {Link} from 'react-router-dom'

import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <Link to='/home'>Logo</Link>
        </div>
        <div class="address">
          <p class="add-1">Deliver to</p>
          <div class="address-icon">
          <FaMapMarkerAlt />
            <p class="add-2">India</p>
          </div>
        </div>
        <div class="search">
          <select class="search-select">
            <option>All</option>
          </select>
          <input type="text" placeholder="search product" class="search-input" />
          <div class="search-icon">
          <IoIosSearch />
          </div>
        </div>
        <div className='list'>
            <ul>
            <li>
                <Link to='/'>Home</Link>
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


