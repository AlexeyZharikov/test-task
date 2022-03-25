import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/signUp.page';
import SignIn from './pages/signIn.page';
import Users from './pages/users.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/main" element={<Users/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
