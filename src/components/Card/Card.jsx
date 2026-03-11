import { useState } from "react";

function Card({ id, title, image, onDelete, onCardClick }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  function handleDelete() {
    onDelete(id);
  }

  function handleImageClick() {
    onCardClick({ title, image });
  }

  return (
    <li className="card">
      <img
        src={image}
        alt={title}
        className="card__image"
        onClick={handleImageClick}
      />

      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={handleDelete}
      />

      <div className="card__description">
        <h2 className="card__title">{title}</h2>

        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${
            liked ? "card__like-button_active" : ""
          }`}
          onClick={handleLike}
        />
      </div>
    </li>
  );
}

export default Card;
