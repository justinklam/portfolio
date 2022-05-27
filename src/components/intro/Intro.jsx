import React from 'react';
import "./intro.css";
import profile from "../../img/profile.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello world, my name is</h2>
          <h2 className="i-name">Justin</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full-stack Developer</div>
              <div className="i-title-item">JavaScript Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">HTML/CSS Developer</div>
              <div className="i-title-item">NodeJS Developer</div>
            </div>
          </div>
          <p className="i-desc">
            Full-stack developer and JavaScript enthusiast
          </p>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profile} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;