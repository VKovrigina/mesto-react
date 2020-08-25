import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
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
    .then(([userInfo, cardsInfo]) => {
      setCurrentUser(userInfo);
      setCards(cardsInfo);
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

  function handleCardLike(cardId, cardLikes) {
    const isLiked = cardLikes.some(i => i._id === currentUser._id);
    if (isLiked) {
      api.deleteLike(cardId)
      .then(newCard => {
        const newCards = cards.map((item) => item._id === cardId ? newCard : item);
        setCards(newCards);
      })
      .catch(err => console.error(err))
    } else {
      api.putLike(cardId)
      .then(newCard => {
        const newCards = cards.map((item) => item._id === cardId ? newCard : item);
        setCards(newCards);
      })
      .catch(err => console.error(err))
    }
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
    .then(() => {
      const newCards = cards.filter((item) => item._id !== cardId);
      setCards(newCards);
    })
    .catch(err => console.error(err))
  }

  function handleAddPlaceSubmit(values) {
    api.createCard(values)
    .then(newCard => {
      setCards([newCard, ...cards]);
    })
    .catch(err => console.error(err));

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
      initialCards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}/>}

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

      <AddPlacePopup
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      onAddPlace={handleAddPlaceSubmit}/>

      <Footer />

      <ImagePopup card={selectedCard}
      onClose={closeAllPopups}
      isOpen={isPhotoPopupOpen}/>

      {/* <PopupWithForm name='delete-card' title='Вы уверены?' buttonText='Да'>
      </PopupWithForm> */}


    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
