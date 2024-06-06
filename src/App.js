
import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => setLogin(true);
  const handleLogout = () => {
    setLogin(false);
    setUsername('');
  };

  const handleUsernameChange = (event) => setUsername(event.target.value);

  return (
    <>
      <div className="login2"></div>
      {login ? (
        <>
        <h2 className="userdisplay">کاربر: {username} {" "} به پنل کاربری خود خوش امدید </h2>
          <button className="btn2" onClick={handleLogout}>خروج از حساب کاربری</button>
        </>
      ) : (
        <>
          <input className="loginbox"
            type="text"
            placeholder="لطفا نام کاربری خود را وارد کنید"
            value={username}
            onChange={handleUsernameChange}
          />
          <button className="btn" onClick={handleLogin}>ورود یا ثبت نام</button>
        </>
      )}
    </>
  );
};

export default App;
