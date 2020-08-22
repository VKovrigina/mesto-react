import React from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser.userInfo)

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
          { currentUser.cards && currentUser.cards.map((card) => 
        <Card key={card._id} onCardClick={onCardClick} {...card} userId={currentUser.userInfo._id} />)}
        </section>

    </main>
  );
}

export default Main;