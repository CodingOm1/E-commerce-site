import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import AppDownload from '../AppDownload/AppDownload'


function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius ex assumenda obcaecati? Vitae sunt architecto minima magni, autem cum molestiae hic, totam provident perspiciatis possimus expedita dicta voluptatem eaque!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Ploicy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9423248870</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <AppDownload/>
        <hr />
        <p className="footer-copyright">Copyright 2024 &copy; www.Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
