import React, { useContext} from "react";
import "./FoodItem.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

function FoodItem({ id, name, image, description, price }) {

    const {cartItems, addtoCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="foodItem">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id]
            ?<img className="add" onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt="" />
            : <div className="food-item-Counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <div className="food-item-desc">
            {description}
        </div>
        <div className="food-item-price">
            ${price}
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
