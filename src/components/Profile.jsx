function Profile({ name, about, avatar, onAddPlace }) {
  return (
    <section className="profile">
      <section className="profile__user">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src={avatar} alt="Avatar" className="profile__avatar" />

            <button
              type="button"
              className="profile__avatar-edit"
              aria-label="Editar avatar"
            />
          </div>

          <div className="profile__details">
            <div className="profile__title">
              <h2 className="profile__name">{name}</h2>

              <button
                type="button"
                className="profile__edit-btn"
                aria-label="Editar perfil"
              />
            </div>

            <p className="profile__role">{about}</p>
          </div>
        </div>

        <button
          type="button"
          className="profile__add-btn"
          aria-label="Agregar lugar"
          onClick={onAddPlace}
        />
      </section>
    </section>
  );
}

export default Profile;
