import './Menu.css';
import { useEffect } from 'react';

const Menu = () => {
  useEffect(() => {
    const typingEffect = document.querySelector('.typing-effect');
    const phrase = 'HUGO BARCELOS..!';
    let index = 0;

    function typeText() {
      typingEffect.textContent = phrase.substring(0, index);
      index++;

      if (index <= phrase.length) {
        setTimeout(typeText, 200); // Delay between each character (adjust as needed)
      }
    }

    typeText();
  }, []);

  return (
    <div className="apresentation">
      <div className="helloDiv">
        <div className="left-apresentation">
          <h1 className="hello-h1 custom-font">Hello</h1>
          <h1 className="iAm-h1 custom-font ">I am</h1>
          <div />
          <div className="nameDiv">
            <p className="name-h1 custom-font typing-effect"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
