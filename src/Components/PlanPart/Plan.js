import React from 'react'
import './Plan.css'
import emoji from '../Images/emoji1.png'
function Plan() {
  return (
   <>
    <section id="plan">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 m-auto">
        <div className="rightplan text-center">
          <h3>Choose The Right Plan</h3>
        </div>
      </div>
      
    </div>
    <div className="row">
      <div className="col-lg-4 m-auto">
      <div className="card-p">
        <div className="basic-card text-center">
          <div className="amount">
           <h5>Basic</h5>
           <img src={emoji} alt=""/>
           <p>$ <span>160</span></p>
           <h3> Responsive Design <br/>
             Dynamic Elements <br/>
             Service Pages <br/>
             Custom Design & Features</h3>
          </div>
         </div>
      </div>
      </div>
        <div className="col-lg-4 m-auto">
      <div className="card-p">
        <div className="basic-card text-center">
          <div className="amount">
           <h5>Basic</h5>
           <img src={emoji}alt=""/>
           <p>$ <span>160</span></p>
           <h3> Responsive Design <br/>
             Dynamic Elements <br/>
             Service Pages <br/>
             Custom Design & Features</h3>
          </div>
         </div>
      </div>
      </div>
      <div className="col-lg-4 m-auto">
      <div className="card-p">
        <div className="basic-card text-center">
          <div className="amount">
           <h5>Basic</h5>
           <img src={emoji} alt=""/>
           <p>$ <span>160</span></p>
           <h3> Responsive Design <br/>
             Dynamic Elements <br/>
             Service Pages <br/>
             Custom Design & Features</h3>
          </div>
         </div>
      </div>
      </div>
      
    </div>
  </div>
</section>
   </>
  )
}

export default Plan