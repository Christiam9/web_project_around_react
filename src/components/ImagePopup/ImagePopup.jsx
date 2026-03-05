import Popup from "../Popup/Popup";

export default function ImagePopup({ card, onClose }) {
  if (!card) return null;

  return (
    <Popup onClose={onClose}>
      <img src={card.image} alt={card.title} className="popup__image" />
      <p className="popup__caption">{card.title}</p>
    </Popup>
  );
}
