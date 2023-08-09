import React from 'react'
import './Choose.css'
import vector from '../Images/Vector.png'
import vector2 from '../Images/Vector2.png'

function Choose() {
  return (
    <>
<section id="choose">
  <div className="img">
   <div className="a">
    <img src={vector} alt=""/>
   </div>
   <div className="b">
   <img src={vector2} alt=""/>
   </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="choose-left d-flex">
        <div className="choose-icon"></div>
        <p>We solve real-world problems through people and the web.</p>
        </div>
        <div className="choose-left d-flex">
          <div className="choose-icon"></div>
          <p>We solve real-world problems through people and the web.</p>
          </div>
          <div className="choose-left d-flex">
            <div className="choose-icon"></div>
            <p>We solve real-world problems through people and the web.</p>
            </div>
            <div className="choose-left d-flex">
              <div className="choose-icon"></div>
              <p>We solve real-world problems through people and the web.</p>
              </div>
      </div>
      <div className="col-lg-6">
        <div className="choos-right">
          <h2>Why Choose Us</h2>
          <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
           <button type='button' className='button'>Contact Us</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </ >
  )
}

export default Choose