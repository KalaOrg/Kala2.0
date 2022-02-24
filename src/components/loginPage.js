import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import logo from '../pictures/kala.png'

function LoginForm( { setToken }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    console.log('LOGIN ERROR ', e);
    e.preventDefault();   
    fetch('http://localhost:3000/api/login', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
         login, 
         password,
      }), 
    })
    .then(result => { 
      return result.json()
    })
    .then(data => {
      console.log('loginPage.js data: ', data);
      if (data.STATUS === true){
        setToken(data);
      }
      else {
        alert('Please submit valid email and password!');
      }
    })
    .catch(err => {
    return ({
     log: `Error fetching data. See console for more details. ${err}`,
     status: 400,
     message: { err: 'Check handleSubmit in loginPage.js' }
    }) 
   }); //if field is bad or cannot get data

  }
  return (
    <div>
      <img id='logo' alt='logo' src={logo}/>
      <form onSubmit={handleSubmit} method="POST">
        <p>Email</p>
        <input type="email" onChange={e => setLogin(e.target.value)} />
        <p>Password</p>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
        <div>
        <button type="submit">Log In</button>
        </div>
      </form>
    </div>
    );
      
};


export default LoginForm;