import React from 'react';
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h2 className="i-name">Justin</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full-stack Developer</div>
              <div className="i-title-item">JavaScript Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">HTML/CSS Developer</div>
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
        </div>
      </div>

      <div className="i-right">right</div>
    </div>
  )
}

export default Intro;