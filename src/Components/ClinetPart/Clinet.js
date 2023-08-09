import React from 'react'
import './Clinet.css'
import shape from '../Images/part 3,shape.png'
function Clinet() {
  return (
    <>
    <section id="clientpart">
  <div className="img">
    <img src={shape} alt="part 3,shape.png"/>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="client-details text-center">
          <h4>53k</h4>
          <p>Happy client</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="client-details text-center">
          <h4>10k</h4>
          <p>Projects Done</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="client-details text-center">
          <h4>120</h4>
          <p>Gets Award</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="client-details demo text-center">
          <h4>16</h4>
          <p>Operated Years</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Clinet