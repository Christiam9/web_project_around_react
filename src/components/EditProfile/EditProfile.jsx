export default function EditProfile() {
  return (
    <form className="popup__form" name="edit-profile-form" noValidate>
      <label className="popup__field">
        <input
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="40"
          className="popup__input popup__input-name"
          placeholder="Nombre"
          required
        />
        <span className="popup__error" id="name-validation"></span>
      </label>

      <label className="popup__field">
        <input
          type="text"
          id="about"
          name="job"
          minLength="2"
          maxLength="200"
          className="popup__input popup__input-about"
          placeholder="Acerca de mi"
          required
        />
        <span className="popup__error" id="about-validation"></span>
      </label>

      <button type="submit" className="button popup__button">
        Guardar
      </button>
    </form>
  );
}
