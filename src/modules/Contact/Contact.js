import React from "react";
import './Contact.css';
import LinkedinIcon from './icon-linkedin-50.png';
import GithubIcon from './icon-github-50.png';

const Contact = () => {
    return (
      <div>
        <div className="contactContainer">
          <h1 className="custom-font contactText">Contact Me</h1>
        </div>
        <div className="iconsContainer">
            <a href="https://www.linkedin.com/in/hugo-barcelos/">
                <img src={LinkedinIcon} alt="LinkedinIcon" className="icon"/>
            </a>
            <a href="https://github.com/hugofbarcelos">
                <img src={GithubIcon} alt="GithubIcon" className="icon"/>
            </a>
        </div>
      </div>
    );
}

export default Contact;