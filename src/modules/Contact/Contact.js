import React, { useRef } from 'react';
import './Contact.css';
import LinkedinIcon from './icon-linkedin-50.png';
import GithubIcon from './icon-github-50.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_gmrizbh', 'template_is98d2n', form.current, 'I-gzM1BKGb-df5OY1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      refreshPage();
  };

  const refreshPage = () => {
    window.location.reload();
  }


  return (
    <div>
      <div className="contactContainer">
        <h1 className="custom-font contactText">Contact Me</h1>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label className="labelContainer custom-font">
            First Name
            <input type="text" name="user_name" />
          </label>
          <label className="labelContainer custom-font">
            Last Name
            <input type="text" name="name" />
          </label>
          <label className="labelContainer custom-font">
            Email
            <input type="email" name="user_email" />
          </label>
          <label className="labelContainer custom-font">
            Comments/Questions
            <textarea type="text" name="user_message" className='commentsInput' textarea/>
          </label>
          <div className='submitContainer'>
            <input type="submit" value="Send" className='submitButton custom-font' />
          </div>
        </form>
      </div>
      <div className="iconsContainer custom-font">
        <div className='followContainer'>
          <h1>Follow me</h1>
        </div>
        <div >
          <a href="https://www.linkedin.com/in/hugo-barcelos/">
            <img src={LinkedinIcon} alt="LinkedinIcon" className="icon" />
          </a>
          <a href="https://github.com/hugofbarcelos">
            <img src={GithubIcon} alt="GithubIcon" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
