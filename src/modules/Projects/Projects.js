import Ageas from './ageas.png';
import './Projects.css';
import CGD from './caixa-geral-de-depositos.jpeg';
import Card from '../../components/Card/Card.js';

const Project = () => {
  return (
    <div>
      <div className="aboutDiv">
        <h1 className="project custom-font">Projects</h1>
      </div>
      <div className="cards">
        <Card 
          text="Back-end Developer" 
          img={CGD} 
          technologies={["Java", "SQL Server", "Jira", "Git", "JPA", "Intellij"]} 
          />
        <Card
          text="Front-end Developer"
          img={Ageas}
          technologies={["JavaScript", "Vue.js", "SCSS", "HTML", "Umbraco", "Axios"]}
          imageClass="ageasPhoto"
        />
      </div>
    </div>
    //height: 320px
  );
};

export default Project;
