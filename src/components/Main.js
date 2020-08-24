import React from 'react';
import Card from './Card';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, initialCards}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState(initialCards); 
  console.log(currentUser);

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

  return (
    <main className="content">

        <section className="profile">
          <button className="profile__avatar-button" onClick={onEditAvatar}>
            <img className="profile__avatar" alt="Фотография пользователя" src={currentUser && currentUser.avatar}/>
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser && currentUser.name}</h1>
            <button className="profile__edit-button button" type="button" aria-label="Изменить" 
            onClick={onEditProfile}></button>
            <p className="profile__job">{currentUser && currentUser.about}</p>
          </div>
          <button className="profile__add-button button" type="button" aria-label="Добавить" 
          onClick={onAddPlace}></button>
        </section>

        <section className="cards">
          { cards.map((card) => 
        <Card 
          key={card._id}
          onCardClick={onCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          {...card}
          userId={currentUser._id} />)}
        </section>

    </main>
  );
}

export default Main;