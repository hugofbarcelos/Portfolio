import './Modal.css';

const Modal = ({isOpen, onClose}) => {
    if(!isOpen){
        return null;
    }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p className="custom-font-readable">Your message has been sent to my email. Thanks!!</p>
      </div>
    </div>
  );
};

export default Modal;
