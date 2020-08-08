import React from 'react';

function Main() {
  return (
    <main className="content">

        <section className="profile">
          <button className="profile__avatar-button">
            <img className="profile__avatar" alt="Фотография пользователя" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button button" type="button" aria-label="Изменить"></button>
            <p className="profile__job"></p>
          </div>
          <button className="profile__add-button button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="cards"></section>

    </main>
  );
}

export default Main;