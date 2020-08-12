import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(name, link) {
    setSelectedCard(
      {name: name,
      link: link})
  }
  
  function closeAllPopups() {
    setTimeout(setIsEditProfilePopupOpen, 500, false);
    setTimeout(setIsAddPlacePopupOpen, 500, false);
    setTimeout(setIsEditAvatarPopupOpen, 500, false);
    setTimeout(setSelectedCard, 500, null);
  }

  return (
    <div className="page">

      <Header />

      <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}/>

      <Footer />

      {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups}/>}

      {isEditProfilePopupOpen && <PopupWithForm
        name='profile' title='Редактировать профиль' buttonText='Сохранить' onClose={closeAllPopups}>
        <input
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
          type="text"
          name="about"
          className="popup__input popup__input_type_job"
          id="job-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required />
        <span className="popup__input-error" id="job-input-error"></span>
      </PopupWithForm>}

      {isAddPlacePopupOpen && <PopupWithForm 
        name='place' title='Новое место' buttonText='Создать' onClose={closeAllPopups}>
        <input
          type="text"
          name="name"
          className="popup__input popup__input_type_title"
          id="title-input"
          placeholder="Название"
          minLength="1"
          maxLength="30"
        required />
        <span className="popup__input-error" id="title-input-error"></span>
        <input
          type="url"
          name="link"
          className="popup__input popup__input_type_img"
          id="img-input"
          placeholder="Ссылка на картинку"
        required />
        <span className="popup__input-error" id="img-input-error"></span>
      </PopupWithForm>}

      {/* <PopupWithForm name='delete-card' title='Вы уверены?' buttonText='Да'>
      </PopupWithForm> */}

      {isEditAvatarPopupOpen && <PopupWithForm 
        name='edit-avatar' title='Сменить аватар' buttonText='Сохранить' onClose={closeAllPopups}>
        <input
        type="url"
        name="avatar"
        className="popup__input popup__input_type_avatar"
        id="avatar-input"
        placeholder="https://..."
        required />
        <span className="popup__input-error" id="avatar-input-error"></span>
      </PopupWithForm>}

    </div>
  );
}

export default App;
