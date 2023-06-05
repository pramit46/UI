import React, { useState } from "react";

import './LoginRegister.css'

function LoginForm(props) {
    const loginFormSubmitHandler=(e)=>{
        e.preventDefault();
        props.closeHandler();
        window.location.href = window.location.origin+"/user"
    }
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button type="submit" onClick={loginFormSubmitHandler}>Login</button>
        </form>
      </div>
    );
  }

function RegisterForm(props) {
    const loginFormSubmitHandler=(e)=>{
        e.preventDefault();
        props.closeHandler();
        window.location.href = window.location.origin+"/user"
    }
    return (
      <div className="register-form">
        <h2>Register</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button type="submit" onClick={loginFormSubmitHandler}>Register</button>
        </form>
      </div>
    );
  }

export default function LoginRegister (props){
    const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const closeFormsHandler = ()=>{
        props.closeFormsHandler();
    }
  const showLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  }

  const showRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }

  return (
    <div className="login-register-container">
      <div className="login-register">
        <div className="tabs">
          <button className={isLoginOpen ? 'active' : ''} onClick={showLogin}>Login</button>
          <button className={isRegisterOpen ? 'active' : ''} onClick={showRegister}>Register</button>
        </div>
        {isLoginOpen && <LoginForm closeHandler={closeFormsHandler}/>}
        {isRegisterOpen && <RegisterForm closeHandler={closeFormsHandler}/>}
      </div>
    </div>
  );
}