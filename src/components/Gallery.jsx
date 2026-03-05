import Card from "./Card";

function Gallery({ cards, onDelete, onCardClick }) {
  return (
    <section className="gallery">
      <ul className="gallery__list">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            onDelete={onDelete}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
