import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({onClose, isOpen, onUpdateAvatar}) {

    const inputRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
          avatar: inputRef.current.value
        });
    }

    return (
    <PopupWithForm 
        name='edit-avatar' title='Сменить аватар' buttonText='Сохранить'
        onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit}>
        <input
        ref={inputRef}
        type="url"
        name="avatar"
        className="popup__input popup__input_type_avatar"
        id="avatar-input"
        placeholder="https://..."
        required />
        <span className="popup__input-error" id="avatar-input-error"></span>
    </PopupWithForm>
    );
}

export default EditAvatarPopup;