import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        console.log("👤 USER:", data);
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser(data) {
    api
      .editUserInfo(data)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onUpdateUser={handleUpdateUser} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
