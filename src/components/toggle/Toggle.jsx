import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

// CSS
import "./toggle.css";

// Image Assets
import Light from "../../img/light-mode.png";
import Dark from "../../img/dark-mode.png";

const Toggle = () => {

  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"});
  };

  return (
    <div className="t">
      <img src={Light} alt="" className="t-icon"/>
      <img src={Dark} alt="" className="t-icon"/>
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}>
      </div>
    </div>
  )
};

export default Toggle;