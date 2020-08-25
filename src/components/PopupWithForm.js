import React from 'react';

function PopupWithForm({ name ,title ,buttonText, children, onClose, isOpen, onSubmit }) {

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
    <div className={`popup popup_${name} popup_form ${isOpen && `popup_open`}`}>
    <div className="popup__container">
      <button 
        className="popup__close-button button" 
        type="button" 
        aria-label="Закрыть"
        onClick= {onClose}>
      </button>
      <form className={`popup__form popup__form_${name}`} name={name} method="get" action="#" onSubmit={onSubmit}>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__form-button" type="submit" aria-label={buttonText}>{buttonText}</button>
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm;