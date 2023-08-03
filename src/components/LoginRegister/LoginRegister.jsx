import React, { useState } from "react";
import axios from 'axios';

import './LoginRegister.css'
import Cookies from "js-cookie";

const authBaseURL = "http://104.197.228.156:5006/"

function LoginForm(props) {
  const [emailId,setEmailId] = useState("");
const [password,setPassword] = useState("");
    const loginFormSubmitHandler=(e)=>{
        e.preventDefault();
        // props.closeHandler();
        const bodyData = {
          email_id:emailId,
          password:password,
        }
        fetch(authBaseURL+"sign_in/",{
          
         
          method:"POST",
          headers:{'Authoriozation':`Bearer${Cookies.get('petStoreToken')}`,'Access-Control-Allow-Origin': '*','Content-Type':'application/json'},
          body:bodyData
        })
        .then(response=>response.json())
        .then(data=>{
          Cookies.set('petStoreToken',data['message']?data['message']:"failed_to_fetch_signin_token");
          Cookies.set('petstoreUserLogin','true');
        })
        props.onClose()
    }

    return (
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={(event)=>setEmailId(event.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/>
          <button type="submit" onClick={loginFormSubmitHandler}>Login</button>
        </form>
      </div>
    );
  }

function RegisterForm(props) {

  const [emailId,setEmailId] = useState("");
const [password,setPassword] = useState("");
const [contact,setContact] = useState("");
const [address,setAddress] = useState("");

    const registerFormSubmitHandler=(e)=>{
        e.preventDefault();
        props.closeHandler();
        fetch(authBaseURL+"sign_up/"+`?email_id=${emailId}&password=${password}&contact=${contact}&address=${address}`,{
          
          method:"POST",
          headers:{
            'Authorization':`Bearer${Cookies.get('petStoreToken')}`,
            'Access-Control-Allow-Origin': '*',
            "Content-Type":"text/plain",
              },
          
          
        })
        .then(response=>response.json())
        .then(data=>{
          Cookies.set('petstoreUserLogin','true');
          console.log(data);
        });
        // fetch('http://104.197.228.156:5006/')
        // .then(response=>console.log(response))
        // .catch(err=>console.log(err))
        props.onClose()
    }
    return (
      <div className="register-form">
        <h2>Register</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={(event)=>setEmailId(event.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/>
          <label htmlFor="email">Address</label>
          <input type="email" name="email" onChange={(event)=>setAddress(event.target.value)}/>
          <label htmlFor="email">Contact</label>
          <input type="email" name="email" onChange={(event)=>setContact(event.target.value)}/>
          
          <button type="submit" onClick={registerFormSubmitHandler}>Register</button>
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
        {isLoginOpen && <LoginForm closeHandler={closeFormsHandler} onClose={()=>props.onClose()}/>}
        {isRegisterOpen && <RegisterForm closeHandler={closeFormsHandler} onClose={()=>props.onClose()}/>}
      </div>
    </div>
  );
}