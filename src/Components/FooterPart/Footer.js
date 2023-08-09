import React from 'react'
import './Footer.css'
import last from '../Images/last,logo.png'
function Footer() {
  return (
    <>
<section id="footer">
 <div class="container">
  <div class="row">
    <div class="col-lg-5">
      <div class="innovate">
        <img src={last} alt=""/>
        <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
      </div>
    </div>
    <div class="col-lg-7 d-flex  justify-content-between">
      <div class="line1">
        <h4>Features</h4>
        <div class="line">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Benifit</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div class="line1">
        <h4>Products</h4>
        <div class="line">
          <ul>
            <li>Task Management</li>
            <li>Company growth</li>
            <li>Time tracking</li>
          </ul>
        </div>
      </div>
       <div class="line1">
        <h4>Support</h4>
        <div class="line">
          <ul>
            <li>Customer service</li>
            <li>Accessibility</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-12">
      <div class="down1 d-flex justify-content-between">
        <h3>@20201 Innovate.All rights reserved.</h3>
        <h4>Privacy policy</h4>
        <h5>Terms & condition</h5>
      </div>
    </div>
   
  </div>
 </div>
 </section> 
    </>
  )
}

export default Footer