import React from "react";

function Card({ name, link, likes }) {
  return (
    <article className="card">
            <button className="card__button-delete" type="button" aria-label="Удалить"></button>
            <img className="card__img" alt={name} src={link} />
            <div className="card__info">
            <h2 className="card__title">{name}</h2>
            <div className="card__likes">
                <button className="card__button-like" type="button" aria-label="Нравится"></button>
                <div className="card__num-likes">{likes}</div>
            </div>
            </div>
    </article>
  );
}

export default Card;