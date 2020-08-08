import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_photo">
        <div className="popup__container">
          <button className="popup__close-button button"></button>
          <img
            className="popup__img"
            alt="" />
          <p className="popup__photo-title"></p>
        </div>
    </div>
  );
}

export default ImagePopup;