import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import sendicon from '../../assets/sendicon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Convert FormData to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    jsonData["access_key"] = "d8d57f88-9af7-4a82-945e-aded18a435ef";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(jsonData), 
    }).then((res) => res.json());

    if (response.success) {
      console.log("Success", response);
      alert(response.message)
    } else {
      console.error("Error submitting form");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>aiswariyak33@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>+91 9207343541</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>kerala, India</p>
            </div>
           
           

          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="" className="name-label">Hi there! 👋 Can I have your name please?</label>
          <input type="text" placeholder='Hi! Sure, [enter your name]' name='name' className='namelabel'/>
          <label htmlFor='' className='email-label'>Could you please share your email as well?</label>
          <input type='email' placeholder='Sure, [Enter your email address]' name='email' />
          <label htmlFor='' className='thanks-label' >Thanks a lot, Got your details. We'll make sure to update our records accordingly. Let me know if there's anything else you need assistance with.</label>
          <textarea name='message' rows="8" placeholder="Thank you for your offer! Right now, I'm all set, but I'll definitely reach out if I need assistance in the future. I appreciate your help! [enter message]"></textarea>
          <button type='submit' className='contact-submit'>
          <img src={sendicon} alt='Icon' class='icon'></img></button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
