import React, { useState } from "react";
import  { useNavigate } from 'react-router-dom';
import Input from "../components/input.component";
import Btn from "../components/Btn.component";

const SignIn = function (props) {
  const [user, setUser] = useState({ login: "", password: "" });
  const navigate = useNavigate();


  const login = (e) => {
    e.preventDefault();
    const usersArr = JSON.parse(localStorage.getItem("users"));
    const loggedIn = usersArr.find(
      ({ login, password }) =>
        login === user.login && password === user.password
    );
    if (loggedIn) {
      navigate('/main', { replace: true })    
    } else {
      alert("wrong login or password");
    }
  };

  return (
    <div className="login_page">
      <form>
        <Input
          value={user.login}
          onChange={(e) => setUser({ ...user, login: e.target.value })}
          label="login"
        />
        <Input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          label="password"
        />
        <Btn onClick={login}>Sign in</Btn>
      </form>
    </div>
  );
};

export default SignIn;
