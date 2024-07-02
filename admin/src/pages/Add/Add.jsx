import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from 'axios';
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const OnChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const OnSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        console.log("Success");
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(false);
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={OnSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            required
            id="image"
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={OnChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Enter Food name here"
          />
        </div>
        <div className="add-product-desc flex-col">
          <p>Food Description</p>
          <textarea
            onChange={OnChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Enter Food Description here"
          />
        </div>
        <div className="add-category-price">
          <div className="category-add flex-col">
            <p>Product Category</p>
            <select
              onChange={OnChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={OnChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="Enter price"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
