import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img
          src="https://images.pexels.com/photos/7858744/pexels-photo-7858744.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="a-img"
        />
      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        This is a placeholder section until I figure out what I want to write.
      </p>
      <p className="a-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
      </p>
    </div>
  </div>
  )
}

export default About;