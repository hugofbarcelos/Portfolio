import './App.css';
import Menu from './Menu/Menu';
import About from './About/About';
import Skills from './Skills/Skills';

function App() {


  return (
    <div class="backgroundImg">
      <div class="header">
        <div class="header-text custom-font ">My Portfolio</div>
        <div class="button">
          <div class="button-line"></div>
          <div class="button-line"></div>
          <div class="button-line"></div>
        </div>
      </div>
      <Menu/>
      <div>
        <div className="horizontal-line"></div>
      </div>
      <About/>
   </div>
  );
}

export default App;
