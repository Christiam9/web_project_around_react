export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="profile-name"
          maxLength="40"
          minLength="1"
          name="name"
          placeholder="Name"
          required
          type="text"
        />
        <span className="popup__error" id="profile-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="profile-description"
          maxLength="200"
          minLength="1"
          name="about"
          placeholder="About me"
          required
          type="text"
        />
        <span className="popup__error" id="profile-description-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
