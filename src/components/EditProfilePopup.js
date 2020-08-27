import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({onClose, isOpen, onUpdateUser, closeByEscAndOverlay}) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, onClose]);

  function handleInputNameChange(e) {
    setName(e.target.value);
  }

  function handleInputDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: name,
      about: description
    });
    }

  return (
    <PopupWithForm
      name='profile' 
      title='Редактировать профиль' 
      buttonText='Сохранить' 
      onClose={onClose} 
      isOpen={isOpen}
      onSubmit={handleSubmit}
      closeByEscAndOverlay={closeByEscAndOverlay}>
      <input
        value={name}
        onChange={handleInputNameChange}
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        id="name-input"
        placeholder="ФИО"
        minLength="2"
        maxLength="40"
        required />
      <span className="popup__input-error" id="name-input-error"></span>
      <input
        value={description}
        onChange={handleInputDescriptionChange}
        type="text"
        name="about"
        className="popup__input popup__input_type_job"
        id="job-input"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required />
      <span className="popup__input-error" id="job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;