import './Projects.css';
import Ageas from './ageas.png';
import CGD from './caixa-geral-de-depositos.jpeg';
import Card from '../components/Card';

const Project = () => {
  return (
    <div>
      <div className="aboutDiv">
        <h1 className="project custom-font">Projects</h1>
      </div>
      <div className="cards">
        <Card text="Back-end Developer" img={CGD} />
        <Card
          text="Front-end Developer"
          img={Ageas}
          containerClass="ageasContainer"
          imageClass="ageasImg"
        />
      </div>
    </div>
    //height: 320px
  );
};

export default Project;
