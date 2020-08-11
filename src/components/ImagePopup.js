import React from 'react';

function ImagePopup({card, onClose}) {

  React.useEffect(() => {
    const thisPopup = document.querySelector(`.popup_photo`);
    thisPopup.classList.add('popup_open');
    return () => {
      thisPopup.classList.remove('popup_open');
    }
  }, [])

  return (
    <div className="popup popup_photo">
        <div className="popup__container">
          <button className="popup__close-button button" onClick={onClose}></button>
          <img
            className="popup__img"
            alt={card.name} src={card.link} />
          <p className="popup__photo-title">{card.name}</p>
        </div>
    </div>
  );
}

export default ImagePopup;