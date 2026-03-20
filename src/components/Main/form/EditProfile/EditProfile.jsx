export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
    >
      <fieldset className="popup__field">
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
        <span className="text-error" id="profile-name-error"></span>
      </fieldset>

      <fieldset className="popup__field">
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
        <span className="text-error" id="profile-description-error"></span>
      </fieldset>

      <button
        className="popup__button-save popup__button_disabled"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}
