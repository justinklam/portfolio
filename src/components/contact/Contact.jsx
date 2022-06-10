import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../../context';
import emailjs from '@emailjs/browser';

// CSS
import "./contact.css";

// Image Assets
import LinkedInImg from "../../img/linkedIn.png";
import GitHubImg from "../../img/github.png";
import AddressImg from "../../img/address.png";
// import EmailImg from "../../img/email.png";
// import PhoneImg from "../../img/phone.png";

const Contact = () => {
  const formRef = useRef();
  const [complete, setComplete] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
              <a href="https://github.com/justinklam" style={{color: darkMode && "white"}}><img 
                src={GitHubImg} 
                alt="" 
                className="c-icon" 
              />
              My GitHub</a>
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/justinkhlam/" style={{color: darkMode && "white"}}><img 
                src={LinkedInImg} 
                alt="" 
                className="c-icon" 
              />
              My LinkedIn Profile</a>
            </div>
            <div className="c-info-item">
              <a href="https://www.google.com/maps/place/Toronto,+ON/@43.717899,-79.6582408,10z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843" style={{color: darkMode && "white"}}><img 
                  src={AddressImg} 
                  alt="" 
                  className="c-icon" 
                />
                Toronto, Ontario</a>
              </div>

          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
              {/* <b>Reach out to me here!</b> */}
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subect" name="user_subject"/>
            <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email"/>
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {/* Return message on Submit press*/}
            {complete && " Thank you for your message!"}
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;