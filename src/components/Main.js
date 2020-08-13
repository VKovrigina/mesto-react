import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [cards, setCards] = React.useState([]);
  const [userInfo, setUserInfo] = React.useState({
    userName: '',
    userDescription: '',
    userAvatar: ''
  });

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(data => {
      setUserInfo({
        userName: data[0].name,
        userDescription: data[0].about,
        userAvatar: data[0].avatar
      })
      setCards(
        data[1].map(item => ({
          id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes.length
        }))
      )
    })
    .catch(err => console.error(err))
  },[]);

  return (
    <main className="content">

        <section className="profile">
          <button className="profile__avatar-button" onClick={onEditAvatar}>
            <img className="profile__avatar" alt="Фотография пользователя" src={userInfo.userAvatar}/>
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userInfo.userName}</h1>
            <button className="profile__edit-button button" type="button" aria-label="Изменить" 
            onClick={onEditProfile}></button>
            <p className="profile__job">{userInfo.userDescription}</p>
          </div>
          <button className="profile__add-button button" type="button" aria-label="Добавить" 
          onClick={onAddPlace}></button>
        </section>

        <section className="cards">{
          cards.map(({id, ...props}) => <Card key={id} {...props} onCardClick={onCardClick} />)
        }</section>

    </main>
  );
}

export default Main;