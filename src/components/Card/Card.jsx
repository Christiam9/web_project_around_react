import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Card({ card, onCardLike, onCardDelete, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  // 👉 verificar si el usuario actual dio like
  const isLiked = card.isLiked;
  console.log("IS LIKED EN CARD:", isLiked);

  // 👉 clase dinámica
  const likeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  function handleLikeClick() {
    console.log("CLICK LIKE", card);
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card._id);
  }

  function handleImageClick() {
    onCardClick(card);
  }

  const isOwn = card.owner === currentUser._id;
  console.log("OWNER:", card.owner);
  console.log("CURRENT USER:", currentUser?._id);

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleImageClick}
      />

      <button className="card__delete-button" onClick={handleDeleteClick} />

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>

        {isOwn && (
          <button className="card__delete-button" onClick={handleDeleteClick} />
        )}
      </div>
    </li>
  );
}

export default Card;
