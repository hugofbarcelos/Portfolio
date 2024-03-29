import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ["JavaScript", "Vue.js", "SCSS", "React.js", "HTML", "Java", "Git", "TypeScript", "Umbraco"];

  return (
    <div id='skills-main'>
        <div className='skillsContainer'>
          <h1 className='custom-font skillsText'>Skills</h1>
        </div>
        <div className='techBox'>
          <div className='techContainer'>
          {skills.map((tech) => {
            return (
                <h1 className="custom-font techName">{tech}</h1>  
                )
              })};
          </div>
        </div>
    </div>
  );
};

export default Skills;
