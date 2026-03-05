export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" noValidate>
      <label className="popup__field">
        <input
          type="url"
          id="avatar"
          name="avatar"
          className="popup__input popup__input-avatar"
          placeholder="URL del avatar"
          required
        />
        <span className="popup__error" id="avatar-validation"></span>
      </label>

      <button type="submit" className="button popup__button">
        Guardar
      </button>
    </form>
  );
}
