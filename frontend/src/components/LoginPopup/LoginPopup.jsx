import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Enter your name' required/>}

                <input type="email" placeholder='Enter your email here' required/>
                <input type="password" placeholder='Enter your Password here' required />

            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input className='checkBox' type="checkbox" required/>
                <p>By Tapping "{currState}", you are aggre to terms and Privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Don't have an account? <span onClick={()=>setCurrState("Sign Up")}>Sign Up</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login</span></p>
            }
            
      </form>
    </div>
  )
}

export default LoginPopup
