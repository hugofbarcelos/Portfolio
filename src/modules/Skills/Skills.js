import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ["JavaScript", "Vue.js", "SCSS", "React.js", "HTML", "Java", "Git", "TypeScript", "VSCode"];

  return (
    <div >
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
