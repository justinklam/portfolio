import React from 'react';
import "./contact.css";
import AddressImg from "../../img/address.png";
import EmailImg from "../../img/email.png";
// import PhoneImg from "../../img/phone.png";

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
              E-mail
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

        <div className="c-right">
          <p className="c-desc">
              <b>Reach out to me here!</b>
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" placeholder="Subect" name="user_subject"/>
            <input type="text" placeholder="Email" name="user_email"/>
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;