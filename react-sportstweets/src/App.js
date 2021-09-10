import React, { useState, useEffect } from 'react';
import { AuthModel, UserModel } from "./models";
import { useRecoilState } from 'recoil';
import { userState } from "./recoil/userAtoms";
import Nav from './components/Nav';
import Routes from './config/routes';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useRecoilState(userState);
  
  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.show().then((json) => {
        setUser(json.data);
      });
    }
  }, [setUser]);

  function modal(event) {
    console.log(open, "=================");
    event.preventDefault();
    setOpen(!open);
    console.log(open, "==============================");
  };
  
  function addUserName(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  function addPassword(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  function handleSubmit(event) {
    setError("");
    event.preventDefault();
    const credentials = { username, password };
    console.log(credentials, "==============");

    AuthModel.login(credentials).then((json) => {
      if (json.status === 400) {
        setError(json.message);
      }

      if (json.status === 200) {
        localStorage.setItem("uid", json.token);
        UserModel.show().then((json) => {
          setUser(json.data);
          console.log(json.data, "=================");
          setOpen(false);
        });
      }
    });
  }

  return (
    <div>
      <Nav username={username} addUserName={addUserName} password={password} addPassword={addPassword} handleSubmit={handleSubmit} setOpen={open} setUser={user} setError={error} logout={logout} modal={modal} />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
