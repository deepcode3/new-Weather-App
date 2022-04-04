import React, { useState } from "react";
import Login from "./compo/Login";
import Profile from "./compo/Profile";
import { LoginContext } from "./Cont/LoginContext";

const MainLogin = () => {
  const [p, setP] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div>
      <LoginContext.Provider value={{ setP, userName, setUserName }}>
        {p ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
};
export default MainLogin;
