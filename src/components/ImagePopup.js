import React from 'react';

function ImagePopup({card, onClose, isOpen}) {

  React.useEffect(() => {
    function handleEscClose(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    function closeByOverlay(e) {
      if (e.target.classList.contains(`popup_open`)) {
        onClose();
      }
    }

    document.addEventListener('click', closeByOverlay);
    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', closeByOverlay);
    }
  })

  return (
    <div className={`popup popup_photo ${isOpen && `popup_open`}`}>
      <div className="popup__container">
        <button 
          className="popup__close-button button"
          type="button" 
          aria-label="Закрыть"
          onClick={onClose}>
        </button>
        <img
          className="popup__img"
          alt={card.name} src={card.link} />
        <p className="popup__photo-title">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;