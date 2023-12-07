import React from "react";
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
              <p>See more</p>
            </div>
          </div>
          <div className="box box-2">
            <div className="box-content">
              <h2>Electronics</h2>
              <p>See more</p>
            </div>
          </div>
          <div className="box box-3">
            <div className="box-content">
              <h2>Books</h2>
              <p>See more</p>
            </div>
          </div>
          {/* Add new boxes here */}
          <div className="box box-4">
            <div className="box-content">
              <h2>Toys & Games</h2>
              <p>See more</p>
            </div>
          </div>
          <div className="box box-5">
            <div className="box-content">
              <h2>Beauty & Personal Care</h2>
              <p>See more</p>
            </div>
          </div>
          <div className="box box-6">
            <div className="box-content">
              <h2>Sports & Outdoors</h2>
              <p>See more</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
