import { useState } from "react";

export default function EditAvatar({ onUpdateAvatar }) {
  const [avatar, setAvatar] = useState("");

  function handleChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar,
    });
  }

  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="popup__field">
        <input
          className="popup__input popup__input_type_avatar"
          id="profile-avatar"
          name="avatar"
          placeholder="Avatar link"
          required
          type="url"
          value={avatar}
          onChange={handleChange}
        />
        <span className="text-error" id="profile-avatar-error"></span>
      </fieldset>

      <button className="popup__button-save" type="submit">
        Guardar
      </button>
    </form>
  );
}
