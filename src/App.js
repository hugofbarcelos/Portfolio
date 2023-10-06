import './App.css';
import Menu from '../src/modules/Menu/Menu';
import About from '../src/modules/About/About';
import Skills from '../src/modules/Skills/Skills';
import Project from '../src/modules/Projects/Projects';
import Contact from './modules/Contact/Contact';
import { useState } from 'react';

const sections = [<Menu />, <About />, <Project />, <Skills />, <Contact />];
/**
 *  TODO organizar app em folder 'components' e 'modules' . Cada module é constituido por varios components, e cada module é responsavel
 *  por conter uma secção da main page
 */

function App() {
  const [sideNav, setSideNav] = useState(false);

  const handleChange = () => {
    if (sideNav === true) {
      setSideNav(false);
    } else {
      setSideNav(true);
    }
  };

  const handleScroll = (position) => {
    window.scrollTo({top: position, behavior: "smooth"});
  }

  return (
    <div class="backgroundImg">
      <div class="header">
        <div class="header-text custom-font ">My Portfolio</div>
        {/* TODO extract this hamburguer into separate reusable component */}
        <div class="button" onClick={handleChange}>
          <div class="button-line"></div>
          <div class="button-line"></div>
          <div class="button-line"></div>
        </div>
        {sideNav && (
          <div className={`sidenav `}>
            <div class="sidenavButton" onClick={handleChange}>
              <div class="button-line-sidenav"></div>
              <div class="button-line-sidenav"></div>
              <div class="button-line-sidenav"></div>
            </div>
            <div className='optionsContainer' >
              <h1 className='custom-font' onClick={() => handleScroll(400)}>AboutMe</h1>
              <h1 className='custom-font' onClick={() => handleScroll(900)}>Projects</h1>
              <h1 className='custom-font' onClick={() => handleScroll(1400)}>Skills</h1>
              <h1 className='custom-font' onClick={() => handleScroll(2000)}>Contact</h1>
            </div>
          </div>
        )}
      </div>
      {sections.map((section, i, arr) => {
        return (
          <div key={i}>
            {section}
            {i === arr.length - 1 ? (
              <div></div>
            ) : (
              <div>
                <div className="horizontal-line"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
