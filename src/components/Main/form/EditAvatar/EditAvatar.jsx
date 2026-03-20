export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      noValidate
    >
      <fieldset className="popup__field">
        <input
          className="popup__input popup__input_type_avatar"
          id="profile-avatar"
          maxLength="200"
          minLength="1"
          name="avatar"
          placeholder="Avatar link"
          required
          type="url"
        />
        <span className="text-error" id="profile-avatar-error"></span>
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
