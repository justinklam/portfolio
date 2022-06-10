import React from 'react'

// CSS
import "./topNav.css";

// Image Assets
import Logo from "../../img/logo.png";

const TopNav = () => {
  return (
    <div class="topbar">
      <div className="topbar-wrapper">
        
        <div className="topbar-left">
          <a className="logo" href="/"><img src={Logo} alt="Logo" /></a>
        </div>

        <div className="topbar-right">
        </div>

      </div>
    </div>
  )
};

export default TopNav;