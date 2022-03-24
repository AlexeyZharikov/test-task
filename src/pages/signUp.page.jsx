import React, { useState } from 'react';
import Input from '../components/input.component';
import Btn from '../components/Btn.component';
import { Link } from 'react-router-dom';

export const SignUp = function (props) {

  const [user, setUser] = useState({login: '', password: '', age: ''});


  const setUsers = (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...users, {id: Date.now(), ...user}]));
  }

  const registration = (e) => {
    e.preventDefault();
    (user.age >= 18) ? setUsers(user) : alert("age is to low");
    setUser({login: '', password: '', age: ''});
    }
  

  return ( 
      <form>
        <Input value={user.login} label="login" onChange={e => setUser({...user, login: e.target.value})}/>
        <Input value={user.password} label="password" onChange={e => setUser({...user, password: e.target.value})}/>
        <Input value={user.age} label="age" onChange={e => setUser({...user, age: e.target.value})}/>
        <Btn onClick={registration}>Sign up</Btn>
        <Link to="/login" className="link">Go to login page</Link>
      </form>
      

      
   );
}

