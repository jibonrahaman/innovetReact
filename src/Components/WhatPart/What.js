import React from 'react'
import './What.css'
import web from '../Images/web-design 1.png'
function What() {
  return (
    <>
<section id="what">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="what-part">
          <h2>What We Do</h2>
          <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
          <a href="">Contact Us</a>
        </div>
      </div>
      <div className="col-lg-4">
     <div className="cardd">
      <div className="card1 text-center">
        <div className="img">
          <img src={web} alt=""/>
        </div>
        <div className="card-title">
          <h4>web Design & Dev </h4>
          <p>Social Media has changed the way we interact & do business while creating</p>
          <a href="">Read more</a>
        </div>
        </div>
     </div>
      </div>
      <div className="col-lg-4">
        <div className="cardd">
         <div className="card1 text-center">
           <div className="img">
             <img src={web} alt=""/>
           </div>
           <div className="card-title">
             <h4>web Design & Dev </h4>
             <p>Social Media has changed the way we interact & do business while creating</p>
             <a href="">Read more</a>
           </div>
           </div>
        </div>
         </div>
         <div className="col-lg-4">
          <div className="cardd card2">
           <div className="card1 text-center">
             <div className="img">
               <img src={web} alt=""/>
             </div>
             <div className="card-title">
               <h4>web Design & Dev </h4>
               <p>Social Media has changed the way we interact & do business while creating</p>
               <a href="">Read more</a>
             </div>
             </div>
          </div>
           </div>
           <div className="col-lg-4">
            <div className="cardd card2">
             <div className="card1 text-center">
               <div className="img">
                 <img src={web} alt=""/>
               </div>
               <div className="card-title">
                 <h4>web Design & Dev </h4>
                 <p>Social Media has changed the way we interact & do business while creating</p>
                 <a href="">Read more</a>
               </div>
               </div>
            </div>
             </div>
             <div className="col-lg-4">
              <div className="cardd card2">
               <div className="card1 text-center">
                 <div className="img">
                <img src={web} alt=""/>
                 </div>
                 <div className="card-title">
                   <h4>web Design & Dev </h4>
                   <p>Social Media has changed the way we interact & do business while creating</p>
                   <a href="">Read more</a>
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

export default What