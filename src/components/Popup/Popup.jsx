export default function Popup({ title, children, onClose }) {
  return (
    <div className="popup">
      <div className="popup__container">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />

        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}
