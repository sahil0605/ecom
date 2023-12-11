import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-msg">
          <p>
            You are at best place to shop ,
            millions of products with fast local delivery.
            {/* <a>Click here to go to amazon.in</a> */}
          </p>
        </div>
      </div>
      <div className="shop-section">
        <div className="box-container">
          <div className="box box-1">
            <div className="box-content">
              <h2>Clothes</h2>
              <div>
              <Link to="/item?type=clothes">See more</Link>
              </div>
            </div>
          </div>
          <div className="box box-2">
            <div className="box-content">
              <h2>Electronics</h2>
              <div >
              <Link to="/item?type=electronics">See more</Link>
              </div>
            </div>
          </div>
          <div className="box box-3">
            <div className="box-content">
              <h2>Books</h2>
              <div >
              <Link to="/item?type=books">See more</Link>
              </div>
            </div>
          </div>
          {/* Add new boxes here */}
          <div className="box box-4">
            <div className="box-content">
              <h2>Toys & Games</h2>
              <div>
              <Link to="/item?type=toys">See more</Link>
              </div>
            </div>
          </div>
          <div className="box box-5">
            <div className="box-content">
              <h2>Beauty & Personal Care</h2>
              <div>
              <Link to="/item?type=beauty">See more</Link>
              </div>
            </div>
          </div>
          <div className="box box-6">
            <div className="box-content">
              <h2>Sports & Outdoors</h2>
              <div>
              <Link to="/item?type=sports">See more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
