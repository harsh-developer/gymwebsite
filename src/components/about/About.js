import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="image">
          <img
            src="https://ik.imagekit.io/d8m85okiz/luis-vidal-FodEsaNZs48-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672128189807"
            alt="choose service"
            className="about-image"
          />
        </div>
        <div className="details">
          <div className="service">
            <li className="service-num">1</li>
            <li className="service-text">Choose your service</li>
          </div>
          <div className="visit">
            <li className="visit-num">2</li>
            <li className="visit-text">Schedule your visit</li>
          </div>
          <div className="info">
            <li className="info-num">3</li>
            <li className="info-text" >Provide your info</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
