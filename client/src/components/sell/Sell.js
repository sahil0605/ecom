// Sell.jsx

import React, { useState } from "react";
import "./Sell.css"; // Import the CSS file
import { Cookies, useCookies } from "react-cookie";
import axios from 'axios'

function Sell() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const [cookies] = useCookies(['access_token'])

  const postData = async () => {
    // Upload image to Cloudinary
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "eclone");
    formData.append("cloud_name", "dv4a2jca4");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dv4a2jca4/image/upload",
        formData
      );
      console.log(response)
      // Get the image URL from Cloudinary response
      setUrl(response.data.url);
      console.log(url);

      // Now, you can send the form data along with the image URL to your backend
      if(url){ const sellData = {
        type,
        name,
        description,
        price,
        url,
      };

      // Assuming your backend endpoint is something like "/api/sell"
      const backendResponse = await axios.post("http://localhost:5000/api/user/createItem", sellData,{
        headers:{authorization :cookies.access_token}
      });

      console.log("Backend Response:", backendResponse.data);
    } }
     catch (error) {
      console.error("Error uploading image or posting data:", error);
    }
  };

  // const handlePost = () => {
  //   // Check if any of the fields is empty
  //   if (!type || !name || !description || !price || !image) {
  //     alert("Please fill in all fields."); // You can customize this alert or use a modal/popup component
  //     return;
  //   }

  //   // Proceed with posting the data
  //   // You can implement the logic to send the data to the server or perform any other actions
  //   console.log("Posting data:", {
  //     type,
  //     name,
  //     description,
  //     price,
  //     image,
  //     url,
  //   });
  // };

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
          <input
            className="file-path validate"
            type="text"
            placeholder="Image Path"
          />
        </div>
      </div>

      <button className="sell-btn" onClick={postData}>
        Post
      </button>
    </div>
  );
}

export default Sell;
