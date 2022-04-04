import React, { useState, useContext } from "react";
import { LoginContext } from "../Cont/LoginContext";

const Login = () => {
  const { setUserName, setP } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input type="text" placeholder="Password" />
      <button
        type="button"
        onClick={() => {
          setP(true);
        }}
      >
        Login
      </button>
    </>
  );
};
export default Login;
