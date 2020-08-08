import React from 'react';

function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_edit-avatar').classList.add('popup_open')
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_profile').classList.add('popup_open')
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_place').classList.add('popup_open')
  }

  return (
    <main className="content">

        <section className="profile">
          <button className="profile__avatar-button" onClick={handleEditAvatarClick}>
            <img className="profile__avatar" alt="Фотография пользователя" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button button" type="button" aria-label="Изменить" 
            onClick={handleEditProfileClick}></button>
            <p className="profile__job"></p>
          </div>
          <button className="profile__add-button button" type="button" aria-label="Добавить" 
          onClick={handleAddPlaceClick}></button>
        </section>

        <section className="cards"></section>

    </main>
  );
}

export default Main;