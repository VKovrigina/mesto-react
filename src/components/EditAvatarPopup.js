import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useFormWithValidation';

function EditAvatarPopup({onClose, isOpen, onUpdateAvatar, closeByEscAndOverlay}) {
    const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation()
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.value = ''
    }, [onClose]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
          avatar: inputRef.current.value
        });
    }

    return (
    <PopupWithForm 
        name='edit-avatar' title='Сменить аватар'
        onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit}
        closeByEscAndOverlay={closeByEscAndOverlay}>
        <input
        ref={inputRef}
        type="url"
        name="avatar"
        className="popup__input popup__input_type_avatar"
        id="avatar-input"
        placeholder="https://..."
        required />
        <span className="popup__input-error" id="avatar-input-error"></span>
        <button className="popup__form-button" type="submit" aria-label="Сохранить">Сохранить</button>
    </PopupWithForm>
    );
}

export default EditAvatarPopup;