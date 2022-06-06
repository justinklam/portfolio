import React from 'react'
import "./topNav.css";
import Logo from "../../img/logo.png"

const TopNav = () => {
  return (
    <div class="topbar">
      <div className="topbar-wrapper">
        
        <div className="topbar-left">
          <a className="logo" href="/"><img src={Logo} alt="Logo" /></a>
        </div>

        <div className="topbar-right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopNav