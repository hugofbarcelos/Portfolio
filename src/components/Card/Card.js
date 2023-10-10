import { useState } from 'react';
import '../Card/Card.css';

const Card = ({ img, imageClass, text, containerClass, technologies }) => {
  const [tech, setTech] = useState(false);

  console.log(tech);

  const handleChange = () => {
    if (tech) {
      setTech(false);
    } else {
      setTech(true);
    }
  };

  return (
    <>
      {!tech ? (
        <div className="card">
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
      ) : (
        <div className="card techCard">
          {technologies.map((tech, i) => {
            return (
              <h1 key={i} className="custom-font-readable technologies">
                {tech}
              </h1>
            );
          })}
          <button className="custom-font techButton" onClick={handleChange}>
            Company
          </button>
        </div>
      )}
    </>
    // TODO try out height: 320px to see if buttons align
    // TODO extract CSS que fizer sentido viver nesta pasta, e tirar da pasta Projects
  );
};

export default Card;
