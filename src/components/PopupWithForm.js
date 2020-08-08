import React from 'react';

function PopupWithForm() {
  return (
    <div className="popup popup_profile popup_form">
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
  );
}

export default PopupWithForm;