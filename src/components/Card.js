import React from "react";

function Card(props) {
  console.log(props)
  const { onCardClick, link, name, likes, owner, userId } = props;
  function handleClick() {
    onCardClick(name, link);
  }
  const isLiked = likes.some(i => i._id === userId);

  const isOwn = owner._id === userId;

  return (
    <article className="card">
      {isOwn && <button className="card__button-delete" type="button" aria-label="Удалить"></button>}
      <img className="card__img" alt={name} src={link} onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
          <div className="card__likes">
            <button className={`card__button-like ${isLiked && `card__button-like_active`}`} type="button" aria-label="Нравится"></button>
            <div className="card__num-likes">{likes.length}</div>
          </div>
      </div>
    </article>
  );
}

export default Card;