import React from 'react';
import HugoPhoto from './CVPhoto.jpeg';
import './About.css';

const About = () => {
  return (
    <div className="about-main" id="about-main">

      {/* TODO extract this into a separate Header component */}
      <div className="aboutDiv">
        <h1 className="about custom-font">ABOUT ME</h1>
      </div>

      <div className="textAndImg">
        <div className="textDiv">
          <h1 className="h1-text custom-font-readable">
            As a Frontend Developer, I’ve always loved to play computer games, and with that I started to
            gain interest in trying to understand how everything worked software
            wise. With these values in mind, I ventured into what was the
            unknown for me, the programming world. There, I discovered the
            thrill of solving difficult challenges that got me to the next
            knowledge dimension.
          </h1>
        </div>
        <div className="photoDiv">
          <img src={HugoPhoto} className="photo" alt="HugoPhoto" />
        </div>
      </div>
    </div>
  );
};

export default About;
