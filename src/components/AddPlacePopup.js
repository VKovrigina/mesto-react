import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({onClose, isOpen, onAddPlace, closeByEscAndOverlay}) {

  const [namePlace, setNamePlace] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setNamePlace('');
    setLink('');
  }, [onClose]);

  function handleInputNamePlaceChange(e) {
    setNamePlace(e.target.value);
  }

  function handleInputLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: namePlace,
      link: link
    });
  }

  return (
    <PopupWithForm 
      name='place' title='Новое место'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      closeByEscAndOverlay={closeByEscAndOverlay}>
      <input
        value={namePlace}
        onChange={handleInputNamePlaceChange}
        type="text"
        name="name"
        className="popup__input popup__input_type_title"
        id="title-input"
        placeholder="Название"
        minLength="1"
        maxLength="30"
      required/>
      <span className="popup__input-error" id="title-input-error"></span>
      <input
        value={link}
        onChange={handleInputLinkChange}
        type="url"
        name="link"
        className="popup__input popup__input_type_img"
        id="img-input"
        placeholder="Ссылка на картинку"
      required />
      <span className="popup__input-error" id="img-input-error"></span>
      <button className="popup__form-button" type="submit" aria-label="Создать">Создать</button>
  </PopupWithForm>
  );
}

export default AddPlacePopup;