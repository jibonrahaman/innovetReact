import React from 'react'
import icon1 from '../Images/icon-1.png'
import icon2 from '../Images/icon-2.svg'
import icon3 from '../Images/impact-bg.png'
import icon4 from '../Images/impact.png'
import './Impact.css'

function Impact() {
  return (
    <>
     <section id="impact">
      <div class="container">
        <div class="impact_main">
          <div class="row">
            <div class="col-lg-6 m-auto">
              <div class="impact_heading text-center">
                <h3>We create real impact</h3>
                <p>We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <div class="impact_left_main">
              <div class="impact_left">
                <div class="icon_img">
                  <img src={icon1} alt="icon"/>
                </div>
                <div class="text">
                  <h5>Competitive analysis</h5>
                  <p>With an all-new look and powerful features, Ekko is the best way to ensure success for your business.</p>
                </div>
              </div>
              <div class="impact_left">
                <div class="icon_img">
                  <img src={icon2} alt="icon"/>
                </div>
                <div class="text">
                  <h5>Strategy And research</h5>
                  <p>Save money and start building your website using the best tools available on the market today.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-6">
            <div class="impact_right">
              <img src={icon4} alt="img"/>
            </div>
          </div>
        </div>
      </div>
      <div class="impact_bg">
        <img src={icon3} alt="img"/>
      </div>
    </section>
    </>
  )
}

export default Impact