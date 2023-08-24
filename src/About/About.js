import React from 'react';
import './About.css';
import HugoPhoto from './CVPhoto.jpeg';

console.log("HugoPhoto:", HugoPhoto);

const About = () => {
  console.log("Inside About component");
  return (
    <div className='about-main'>
      <div className='aboutDiv'>
        <h1 className="about custom-font">ABOUT ME</h1>
      </div>

      <div className='textAndImg'>
        <div className='textDiv'>
          <h1 className="h1-text custom-font"> Lorem ipsum dolor sit amet. In tempore labore non saepe quasi non 
          nihil voluptatem et iste ratione aut quod sint qui fugiat omnis! Qui porro amet ea quia molestiae non possimus
           itaque. Aut galisum voluptatem quo sequi voluptas id laudantium porro qui veniam quia vel sapiente quia in esse
            quia et quia maxime.</h1>
        </div>
        <div className="photoDiv">

          <img src={HugoPhoto} className="photo" alt="HugoPhoto" />
        </div>
      </div>

    </div>
  );
};

export default About;
