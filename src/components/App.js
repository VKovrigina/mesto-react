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

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  return (
    <div className="page">

      <Header />

      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />

      <Footer />

      <template id="card-template">
        <article className="card">
                <button className="card__button-delete" type="button" aria-label="Удалить"></button>
                <img className="card__img" alt="" />
                <div className="card__info">
                  <h2 className="card__title"></h2>
                  <div className="card__likes">
                    <button className="card__button-like" type="button" aria-label="Нравится"></button>
                    <div className="card__num-likes"></div>
                  </div>
                </div>
        </article>
      </template>

      <template id="card-template-defaut">
        <article className="card">
                <img className="card__img" alt="" />
                <div className="card__info">
                  <h2 className="card__title"></h2>
                  <div className="card__likes">
                    <button className="card__button-like" type="button" aria-label="Нравится"></button>
                    <div className="card__num-likes"></div>
                  </div>
                </div>
        </article>
      </template>

      <ImagePopup />

      <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить'>
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

      </PopupWithForm>

      <PopupWithForm name='place' title='Новое место' buttonText='Создать'>
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
      <span className="popup__input-error" id="img-input-error"></span></PopupWithForm>

      <PopupWithForm name='delete-card' title='Вы уверены?' buttonText='Да'>
      </PopupWithForm>

      <PopupWithForm name='edit-avatar' title='Сменить аватар' buttonText='Сохранить'><input
        type="url"
        name="avatar"
        className="popup__input popup__input_type_avatar"
        id="avatar-input"
        placeholder="https://..."
        required />
      <span className="popup__input-error" id="avatar-input-error"></span></PopupWithForm>

      {/* <div className="popup popup_profile popup_form">
        <div className="popup__container">
          <button className="popup__close-button button" type="button" aria-label="Закрыть"></button>
          <form className="popup__form popup__form_profile" name="form-profile" method="get" action="#" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>

            <input
              type="text"
              name="name"
              className="popup__input popup__input_type_name"
              id="name-input"
              placeholder="ФИО"
              minlength="2"
              maxlength="40"
            required />
            <span className="popup__input-error" id="name-input-error"></span>

            <input
              type="text"
              name="about"
              className="popup__input popup__input_type_job"
              id="job-input"
              placeholder="О себе"
              minlength="2"
              maxlength="200"
            required />
            <span className="popup__input-error" id="job-input-error"></span>

            <button className="popup__form-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_place popup_form">
        <div className="popup__container">
          <button className="popup__close-button button"></button>
          <form className="popup__form popup__form_place" name="form-place" method="get" action="#" novalidate>
            <h2 className="popup__title">Новое место</h2>

              <input
                type="text"
                name="name"
                className="popup__input popup__input_type_title"
                id="title-input"
                placeholder="Название"
                minlength="1"
                maxlength="30"
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

            <button className="popup__form-button popup__form-button_inactive" type="submit" disabled>Создать</button>
          </form>
        </div>
      </div>


      <div className="popup popup_delete-card popup_form">
        <div className="popup__container">
          <button className="popup__close-button button"></button>
          <form className="popup__form">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__form-button" type="submit">Да</button>
        </form>
        </div>
      </div>

      <div className="popup popup_edit-avatar popup_form">
        <div className="popup__container">
          <button className="popup__close-button button"></button>
          <form className="popup__form popup__form_avatar">
          <h2 className="popup__title">Сменить аватар</h2>
          <input
            type="url"
            name="avatar"
            className="popup__input popup__input_type_avatar"
            id="avatar-input"
            placeholder="https://..."
            required />
            <span className="popup__input-error" id="avatar-input-error"></span>
          <button className="popup__form-button" type="submit">Сохранить</button>
        </form>
        </div>
      </div> */}

    </div>
  );
}

export default App;
