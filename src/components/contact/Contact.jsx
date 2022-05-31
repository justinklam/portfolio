import React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

// Image Assets
import AddressImg from "../../img/address.png";
import EmailImg from "../../img/email.png";
// import PhoneImg from "../../img/phone.png";

const Contact = () => {
  const formRef = useRef();
  const [complete, setComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_18rokgu', 
      'template_nqqtns9', 
      formRef.current, 
      'KYowkfYBt_8fTeWiP'
      )
    .then((result) => {
        console.log(result.text);
        setComplete(true);
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
    // to reset email text
  };

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
              {/* <b>Reach out to me here!</b> */}
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" placeholder="Subect" name="user_subject"/>
            <input type="email" placeholder="Email" name="user_email"/>
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {/* Return message on Submit press*/}
            {complete && "Thank you for your message"}
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;