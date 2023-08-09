import React from 'react'
import './Like.css'
import blank from '../Images/blank-img.png'
function Like() {
  return (
    <>
     <div id="like-part">
  <div class="container">
    <div class="row text-center">
      <div class="col-lg-5">
        <h4>You May Also Like </h4>
      </div>
    </div>
    <div class="row ">
      <div class="col-lg-4 ">
        <div class="blank-img ">
        <img src={blank} alt=""/>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="blank-text">
     <div class="news-part d-flex">
      <h3>News</h3>
      <h6>By</h6>
      <h5>Tomas Nikelson </h5>
      <h2>Posted</h2>
      <span>5 Hours Ago </span>
     </div>
     <p>Punto Pago Allows Quick And Secure 
      Payments For Services In Panama</p>
      <div class="read-part">
       <a href="">Read More</a>
      </div>
      </div>
    </div>
  </div> 
  <div class="row mt-5 ">
      <div class="col-lg-4  ">
        <div class="blank-img  ">
        <img src={blank} alt=""/>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="blank-text">
     <div class="news-part d-flex">
      <h3>News</h3>
      <h6>By</h6>
      <h5>Tomas Nikelson </h5>
      <h2>Posted</h2>
      <span>5 Hours Ago </span>
     </div>
     <p>Punto Pago Allows Quick And Secure 
      Payments For Services In Panama</p>
      <div class="read-part">
       <a href="">Read More</a>
      </div>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-lg-4  ">
      <div class="blank-img  ">
        <img src={blank} alt=""/>
      </div>
    </div>
    <div class="col-lg-6 ">
      <div class="blank-text">
   <div class="news-part d-flex">
    <h3>News</h3>
    <h6>By</h6>
    <h5>Tomas Nikelson </h5>
    <h2>Posted</h2>
    <span>5 Hours Ago </span>
   </div>
   <p>Punto Pago Allows Quick And Secure 
    Payments For Services In Panama</p>
    <div class="read-part">
     <a href="">Read More</a>
    </div>
    </div>
  </div>
</div>
 </div>
</div>
    </>
  )
}

export default Like