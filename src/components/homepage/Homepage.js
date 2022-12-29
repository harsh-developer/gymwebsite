import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container">
      <img
        src="https://ik.imagekit.io/d8m85okiz/anastase-maragos-9dzWZQWZMdE-unsplash__1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672128281119"
        alt="background"
        className="bg-image"
      />
      <h1 className="text-over-image-htag">Your Fitness Portal</h1>
      <p className="text-over-image-ptag">The harsh fitness club</p>
      <button className="start-button">Get Started</button>
    </div>
  );
}

export default Homepage;
