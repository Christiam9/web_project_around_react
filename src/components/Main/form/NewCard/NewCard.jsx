import { useState, useEffect, useContext } from "react";

export default function NewCard({ onAddCard }) {
  const [nameError, setNameError] = useState("");
  const [linkError, setLinkError] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (name.length >= 2 && link.length >= 2) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, link]);

  function handleSubmit(e) {
    e.preventDefault();

    /*const name = e.target["card-name"].value;
    const link = e.target["link"].value;*/

    console.log("📤 DATOS DEL FORM:", { name, link });

    onAddCard({ name, link });
  }

  function handleNameChange(e) {
    const value = e.target.value;
    console.log(value);
    setName(value);

    if (e.target.validity.valid) {
      setNameError("");
    } else {
      setNameError(e.target.validationMessage);
    }
  }

  function handleLinkChange(e) {
    const value = e.target.value;
    console.log(value);
    setLink(value);

    if (e.target.validity.valid) {
      setLinkError("");
    } else {
      setLinkError(e.target.validationMessage);
    }
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
          className={`popup__input popup__input_type_card-name ${
            nameError ? "popup__input_type_error" : ""
          }`}
          id="card-name"
          maxLength="30"
          minLength="2"
          name="card-name"
          value={name}
          placeholder="Title"
          required
          type="text"
          onChange={handleNameChange}
        />
        <span className="text-error" id="card-name-error">
          {nameError}
        </span>
      </label>

      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_url ${
            linkError ? "popup__input_type_error" : ""
          }`}
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={link}
          onChange={handleLinkChange}
        />
        <span className="text-error" id="card-link-error">
          {linkError}
        </span>
      </label>

      <button
        className={`popup__button-save ${
          !isValid ? "popup__button_disabled" : ""
        }`}
        disabled={!isValid}
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}
