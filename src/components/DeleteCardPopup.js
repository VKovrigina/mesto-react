import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({onClose, isOpen, onDeleteCard, closeByEscAndOverlay, card}) {


    function handleSubmit(e) {
        e.preventDefault();

        onDeleteCard(card.id);
    }

    return (
        <PopupWithForm
        name='delete-card'
        title='Вы уверены?'
        buttonText='Да'
        closeByEscAndOverlay={closeByEscAndOverlay}
        onClose={onClose}
        isOpen={isOpen}
        onSubmit={handleSubmit}>
        </PopupWithForm>
    );
}

export default DeleteCardPopup;