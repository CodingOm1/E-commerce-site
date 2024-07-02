import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from "../../context/StoreContext";

function PlaceOrder() {


    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='Enter your First name' />
          <input type="text" placeholder='Enter your Last name' />
        </div>
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Street Address' />
        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-detail">
                  <p>SubTotal</p>
                  <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-detail">
                <p>Delievery Fee</p>
                <p>${getTotalCartAmount()===0?0:15}</p>
              </div>
              <hr />
              <div className="cart-detail">
                <p><b>Total</b></p>
                <b>${getTotalCartAmount()+15}</b>
              </div>
            </div>
            <button className={getTotalCartAmount()===0?"CartAdded":""}>PAYMENTS</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
