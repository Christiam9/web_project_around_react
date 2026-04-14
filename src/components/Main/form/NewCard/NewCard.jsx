export default function NewCard({ onAddCard }) {
  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target["card-name"].value;
    const link = e.target["link"].value;

    console.log("📤 DATOS DEL FORM:", { name, link });

    onAddCard({ name, link });
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
        />
        <span className="text-error" id="card-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
        />
        <span className="text-error" id="card-link-error"></span>
      </label>

      <button className="popup__button-save" type="submit">
        Guardar
      </button>
    </form>
  );
}
