import React from "react";
import '../../css/home.css';
import  aimlogo from '../../icons/betterwellnessaim.jpg';

const Fourthsec = () => {
    return (
      <div className="fs-wrapper">
        <div className="fs-container">
          <div className="fs-first-heading">
            <h1>Actually try writing your thoughts down...When you're super stressed and overwhelmed, see if there's any way to put a positive spin on it.</h1>
          </div>
        </div>

      {/* section 2 */}
      <div className="fs-two-container">
        <div className="fs-two-content">
          <div className="fs-two-cntn1">
              <h1>BetterWellness Moto</h1>
              <em>To Make The World A Better Place.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error minima porro nulla exercitationem id quam, aliquid doloribus commodi eum ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sapiente pariatur, beatae placeat adipisci in voluptatibus officiis? Quisquam, delectus eum!
              </em>
          </div>
          <div className="fs-two-cntn2">
            <img src={aimlogo} alt="" />
          </div>
        </div>
      </div>

      </div>
    )
}

export default Fourthsec;