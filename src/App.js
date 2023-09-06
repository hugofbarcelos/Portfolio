import './App.css';
import Menu from './Menu/Menu';
import About from './About/About';
//import Skills from './Skills/Skills';
import Project from './Projects/Projects';

const sections = [<Menu />, <About />, <Project />];
/**
 *  TODO organizar app em folder 'components' e 'modules' . Cada module é constituido por varios components, e cada module é responsavel
 *  por conter uma secção da main page
 */

function App() {
  return (
    <div class="backgroundImg">
      <div class="header">
        <div class="header-text custom-font ">My Portfolio</div>
        {/* TODO extract this hamburguer into separate reusable component */}
        <div class="button">
          <div class="button-line"></div>
          <div class="button-line"></div>
          <div class="button-line"></div>
        </div>
      </div>
      {sections.map((section) => {
        return (
          <div>
            {section}
            <div>
              <div className="horizontal-line"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
