import './App.css';
import Menu from './Menu/Menu';

function App() {
  window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    let parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
  });

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
    </div>
  );
}

export default App;
