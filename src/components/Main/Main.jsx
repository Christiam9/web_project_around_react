import { useState } from "react";
import { cards, user } from "../../utils/constants";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import ImagePopup from "../ImagePopup/ImagePopup";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cardList, setCardList] = useState(cards);

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleAddCard(newCard) {
    const cardWithId = {
      ...newCard,
      id: Date.now(),
    };

    setCardList([cardWithId, ...cardList]);
    setPopup(null);
  }

  function handleDeleteCard(id) {
    setCardList(cardList.filter((card) => card.id !== id));
  }

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddCard={handleAddCard} />,
  };

  return (
    <main className="content">
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img
              src={user.avatar}
              alt={user.name}
              className="profile__avatar"
            />
            <button
              type="button"
              className="profile__avatar-edit"
              aria-label="Editar avatar"
            ></button>
          </div>

          <div className="profile__details">
            <div className="profile__title">
              <h2 className="profile__name">{user.name}</h2>
              <button
                className="profile__edit-btn"
                aria-label="Editar perfil"
              ></button>
            </div>
            <p className="profile__role">{user.about}</p>
          </div>
        </div>

        <button
          className="profile__add-btn"
          aria-label="Agregar lugar"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <ul className="gallery__list">
          {cardList.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              image={card.image}
              onDelete={handleDeleteCard}
              onCardClick={handleOpenPopup}
            />
          ))}
        </ul>
      </section>

      {/* POPUP NUEVA TARJETA */}
      {popup && popup.children && (
        <Popup title={popup.title} onClose={() => setPopup(null)}>
          {popup.children}
        </Popup>
      )}

      {/* POPUP IMAGEN */}
      {popup && popup.image && (
        <ImagePopup card={popup} onClose={() => setPopup(null)} />
      )}
    </main>
  );
}
