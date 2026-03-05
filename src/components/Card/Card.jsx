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
    <li className="gallery__item">
      <button
        className="gallery__delete-button"
        onClick={handleDelete}
        type="button"
      >
        🗑️
      </button>

      <img
        src={image}
        alt={title}
        className="gallery__image"
        onClick={handleImageClick}
      />

      <div className="gallery__info">
        <h3 className="gallery__title">{title}</h3>

        <button
          className={`gallery__like-button ${
            liked ? "gallery__like-button_active" : ""
          }`}
          onClick={handleLike}
          type="button"
        >
          ❤️
        </button>
      </div>
    </li>
  );
}

export default Card;
