import React from 'react';
import "./contact.css";
import AddressImg from "../../img/address.png";
import EmailImg from "../../img/email.png";
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
                src={EmailImg} 
                alt="" 
                className="c-icon" 
              />
              E-mail me here!
            </div>
            <div className="c-info-item">
              <img 
                src={AddressImg} 
                alt="" 
                className="c-icon" 
              />
              Toronto, Ontario
            </div>
          </div>
        </div>

        <div className="c-right"></div>
      </div>
    </div>
  )
};

export default Contact;