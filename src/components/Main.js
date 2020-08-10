import React from 'react';
import api from '../utils/Api';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getUserInfo()
    .then(data => {
      console.log(data);
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
  },[]);

  return (
    <main className="content">

        <section className="profile">
          <button className="profile__avatar-button" onClick={onEditAvatar}>
            <img className="profile__avatar" alt="Фотография пользователя" src={userAvatar}/>
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button button" type="button" aria-label="Изменить" 
            onClick={onEditProfile}></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button className="profile__add-button button" type="button" aria-label="Добавить" 
          onClick={onAddPlace}></button>
        </section>

        <section className="cards"></section>

    </main>
  );
}

export default Main;