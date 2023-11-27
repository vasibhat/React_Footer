import React from 'react'
import "./Footer.css"


function Footer() {
  return (
    <div className='container'>
        <div className='heading'>
            <h3>Foolish Developer</h3>
        </div>
        <div className='content'>
            <p>Foolish Developer is a blog website where you will find great tutorials on web design and development.Here each tutorials is beautifully described step by step with the required source code.</p>
        </div>
        <div className='logo'>
          <ui>
            <li>
          <a href='www.twitter.com'><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_gray-512.png" alt="" /></a>
          <a href='www.facebook.com'><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_gray-512.png" alt="" /></a>
          <a href='www.linkedin.com'><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_gray-512.png" alt="" /></a>
          </li>
          </ui>

        </div>
        
    </div>
  )
}

export default Footer