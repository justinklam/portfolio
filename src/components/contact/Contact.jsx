import React from 'react';
import "./contact.css";
import EmailImg from "../../img/email.png";
import AddressImg from "../../img/address.png";
import PhoneImg from "../../img/phone.png";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img 
                src="" 
                alt="" 
                className="c-icon" 
              />
            </div>
          </div>
        </div>

        <div className="c-right"></div>
      </div>
    </div>
  )
};

export default Contact;