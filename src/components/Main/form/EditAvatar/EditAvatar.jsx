export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_avatar"
          id="profile-avatar"
          name="avatar"
          placeholder="Avatar link"
          required
          type="url"
        />
        <span className="popup__error" id="profile-avatar-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
