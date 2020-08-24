import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState(null); 
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isPhotoPopupOpen, setIsPhotoPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(data => {
      setCurrentUser(data[0]);
      setCards(data[1]);
    })
    .catch(err => console.error(err))
  },[]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(name, link) {
    setSelectedCard(
      {name: name,
      link: link});
    setIsPhotoPopupOpen(true);
  }
  
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsPhotoPopupOpen(false);
  }

  function handleUpdateUser(values) {
    api.editProfile(values)
    .then(res => {
      setCurrentUser({
        ...currentUser,
        name: res.name,
        about: res.about
      });
    })
    .catch(err => console.error(err))

    closeAllPopups();
  }

  function handleUpdateAvatar(values) {
    api.editAvatar(values)
    .then(res => {
      setCurrentUser({
        ...currentUser,
        avatar: res.avatar
      });
    })
    .catch(err => console.error(err))

    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">

      <Header />

      {/** MAIN */}
      { currentUser && cards && <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      initialCards={cards}/>}

      {/** EditProfilePopup */}
      { currentUser && <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}/>
      }

      {/** EditAvatarPopup */}
      { currentUser && <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}/>
      }

      <Footer />

      <ImagePopup card={selectedCard}
      onClose={closeAllPopups}
      isOpen={isPhotoPopupOpen}/>

      <PopupWithForm 
        name='place' title='Новое место' buttonText='Создать' onClose={closeAllPopups} isOpen={isAddPlacePopupOpen}>
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
      </PopupWithForm>

      {/* <PopupWithForm name='delete-card' title='Вы уверены?' buttonText='Да'>
      </PopupWithForm> */}


    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
