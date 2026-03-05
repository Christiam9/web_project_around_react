import Profile from "../Profile";
import Gallery from "../Gallery";
import { cards, user } from "../../utils/constants";
import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/NewCard/NewCard";
import ImagePopup from "./components/ImagePopup/ImagePopup";

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
      <Profile
        name={user.name}
        about={user.about}
        avatar={user.avatar}
        onAddPlace={() => handleOpenPopup(newCardPopup)}
      />

      <Gallery
        cards={cardList}
        onDelete={handleDeleteCard}
        onCardClick={handleOpenPopup}
      />

      {popup && popup.children && (
        <Popup title={popup.title} onClose={() => setPopup(null)}>
          {popup.children}
        </Popup>
      )}

      {popup && popup.image && (
        <ImagePopup card={popup} onClose={() => setPopup(null)} />
      )}
    </main>
  );
}
