import { useState } from 'react';
import '../Projects/Projects.css';

const Card = ({ img, imageClass, text, containerClass }) => {

    const [tech, setTech] = useState(false);

    console.log(tech)

    const handleChange = () => {
        if(tech){
            setTech(false);
        }else{
            setTech(true);
        }
    }

  return (
    <>
      {(!tech) ? 
        <div class="card">
          <div className={`container ${containerClass ?? ''}`}>
            <img src={img} alt="HugoPhoto" className={imageClass ?? ''} />
            <h4 className="custom-font">
              <b>{text}</b>
            </h4>
            <button className="custom-font techButton" onClick={handleChange}>
              TECH
            </button>
          </div>
        </div>
       : 
        <div>
            <h1>hello</h1>


        <button className="custom-font techButton" onClick={handleChange}>
              TECH
            </button>
        </div>
      }
    </>
    // TODO try out height: 320px to see if buttons align
    // TODO extract CSS que fizer sentido viver nesta pasta, e tirar da pasta Projects
  );
};

export default Card;
