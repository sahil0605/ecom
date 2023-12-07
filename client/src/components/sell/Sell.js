// Sell.jsx

import React, { useState } from 'react';
import './Sell.css'; // Import the CSS file

function Sell() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const handlePost = () => {
    // Check if any of the fields is empty
    if (!type || !name || !description || !price || !image) {
      alert('Please fill in all fields.'); // You can customize this alert or use a modal/popup component
      return;
    }

    // Proceed with posting the data
    // You can implement the logic to send the data to the server or perform any other actions
    console.log('Posting data:', { type, name, description, price, image, url });
  };

  return (
    <div className="sell-container">
      <div className="sell-input-field">
        <label>Type of Product:</label>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      <div className="sell-input-field">
        <label>Name of Product:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="sell-input-field">
        <label>Description:</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="sell-input-field">
        <label>Price:</label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="sell-file-field input-field">
        <div className="sell-btn">
          <span>Upload Image:</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" placeholder="Image Path" />
        </div>
      </div>

      <button className="sell-btn" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}

export default Sell;
