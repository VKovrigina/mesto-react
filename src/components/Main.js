import React from 'react';
import Card from './Card';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState(currentUser.cards); 
  console.log(currentUser.userInfo);

  function handleCardLike(cardId, cardLikes) {
    const isLiked = cardLikes.some(i => i._id === currentUser.userInfo._id);
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

  return (
    <main className="content">

        <section className="profile">
          <button className="profile__avatar-button" onClick={onEditAvatar}>
            <img className="profile__avatar" alt="Фотография пользователя" src={currentUser.userInfo && currentUser.userInfo.avatar}/>
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.userInfo && currentUser.userInfo.name}</h1>
            <button className="profile__edit-button button" type="button" aria-label="Изменить" 
            onClick={onEditProfile}></button>
            <p className="profile__job">{currentUser.userInfo && currentUser.userInfo.about}</p>
          </div>
          <button className="profile__add-button button" type="button" aria-label="Добавить" 
          onClick={onAddPlace}></button>
        </section>

        <section className="cards">
          { cards.map((card) => 
        <Card key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} {...card} userId={currentUser.userInfo._id} />)}
        </section>

    </main>
  );
}

export default Main;