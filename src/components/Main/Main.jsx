import { useState, useEffect, useContext } from "react";
import api from "../../utils/api";
import Card from "../Card/Card";
import Popup from "./Popup/Popup";
import NewCard from "./form/NewCard/NewCard";
import ImagePopup from "../ImagePopup/ImagePopup";
import EditProfile from "./form/EditProfile/EditProfile";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  cards,
  setCards,
  onUpdateUser,
  onUpdateAvatar,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [popup, setPopup] = useState(null);

  function handleOpenPopup(type) {
    setPopup(type);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleAddCard(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards((prevCards) => [newCard, ...prevCards]);
        setPopup(null);
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateUserAndClose(data) {
    onUpdateUser(data);
    setPopup(null);
  }

  function handleUpdateAvatarAndClose(data) {
    onUpdateAvatar(data);
    setPopup(null);
  }

  function handleDeleteCard(id) {
    api
      .deleteCard(id)
      .then(() => {
        setCards((prevCards) => prevCards.filter((card) => card._id !== id));
      })
      .catch((err) => console.log(err));
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    try {
      const newCard = isLiked
        ? await api.unlikeCard(card._id)
        : await api.likeCard(card._id);
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="content">
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img
              src={currentUser?.avatar}
              alt={currentUser?.name}
              className="profile__avatar"
            />
            <button
              type="button"
              className="profile__avatar-edit"
              onClick={() => handleOpenPopup("editAvatar")}
            ></button>
          </div>

          <div className="profile__details">
            <div className="profile__title">
              <h2 className="profile__name">{currentUser?.name}</h2>
              <button
                className="profile__edit-btn"
                onClick={() => handleOpenPopup("editProfile")}
              ></button>
            </div>
            <p className="profile__role">{currentUser?.about}</p>
          </div>
        </div>

        <button
          className="profile__add-btn"
          onClick={() => handleOpenPopup("newCard")}
        ></button>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCard}
              onCardClick={handleOpenPopup}
            />
          ))}
        </ul>
      </section>

      {/* POPUPS */}
      {popup === "newCard" && (
        <Popup title="Nuevo lugar" onClose={handleClosePopup}>
          <NewCard onAddCard={handleAddCard} />
        </Popup>
      )}
      {popup === "editProfile" && (
        <Popup title="Editar perfil" onClose={handleClosePopup}>
          <EditProfile onUpdateUser={handleUpdateUserAndClose} />
        </Popup>
      )}

      {popup === "editAvatar" && (
        <Popup title="Editar avatar" onClose={handleClosePopup}>
          <EditAvatar onUpdateAvatar={handleUpdateAvatarAndClose} />
        </Popup>
      )}

      {popup && popup.image && (
        <ImagePopup card={popup} onClose={handleClosePopup} />
      )}
    </main>
  );
}
