import React from 'react';
import "./toggle.css";

// Art assets
import Light from "../../img/light-mode.png";
import Dark from "../../img/dark-mode.png";

const Toggle = () => {
  return (
    <div className="t">
      <img src={Light} alt="" className="t-icon"/>
      <img src={Dark} alt="" className="t-icon"/>
      <div className="t-button">
        
      </div>
    </div>
  )
};

export default Toggle;