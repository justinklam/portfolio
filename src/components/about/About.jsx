import React from 'react';
import "./about.css";
import profilePic from "../../img/profile.jpg"

const About = () => {
  return (
    <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img
        // alternative art
        // https://images.pexels.com/photos/7858744/pexels-photo-7858744.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
          src={profilePic}
          alt=""
          className="a-img"
        />
      </div>
    </div>
    
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        I'm a full-stack developer that loves finding unique solutions to challenging problems.
      </p>
      <p className="a-desc">
        I was born and raised in Canada. I graduated from a full-stack web development bootcamp from <a href="https://www.lighthouselabs.ca/" style={{color: "blue"}}>Lighthouse Labs</a> in 2022. 
        <p>Before that, I studied Sociology and Criminology at the <a href="https://www.utoronto.ca/" style={{color: "blue"}}>University of Toronto</a>.</p>
        <p>Coding is one of my newer passions. In my spare time, I love gaming, rock climbing and MMA.</p>
        <p>Reach out to me on the contact form below!</p>
      </p>
    </div>
  </div>
  );
};

export default About;