import ReactDom from 'react-dom';
import './Modal.scss';

function Modal({ isOpen, onClose, content, next, prev }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay-styles' onClick={onClose} />
      <div className='modal'>
        <button onClick={onClose}> X </button>
        <div>
          <div className='modal-body'>
            <img src={content.imgSrc} alt={content.title} />
          </div>
          <div className='modal-footer'>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
          </div>
        </div>
        <div>
          <button onClick={prev}>&#10094;</button>
          <button onClick={next}>&#10095;</button>
        </div>
      </div>
    </>,

    document.body,
  );
}

export default Modal;
