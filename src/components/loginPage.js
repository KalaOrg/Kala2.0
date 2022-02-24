import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import logo from '../pictures/kala.png';
import styled from 'styled-components'

const Login = styled.div`
  margin: auto;
  padding: 10px;
  padding-bottom: 15px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
  background-color: #ACC4B0;
  max-width: 20%;
  min-width: 200px;
`;

const ButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-self: center;
  justify-content: center;
  margin-top: 10px;
`;

function LoginForm( { setToken } ) {
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
   });
  }

  return (
    <Login>
      <img id='logo' alt='logo' src={logo}/>
      <form onSubmit={handleSubmit} method="POST">
        <p>Email</p>
        <input type="email" onChange={e => setLogin(e.target.value)} />
        <p>Password</p>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
        <ButtonStyle>
        <button type="submit" className="btn btn-outline-light">Log In</button>
        </ButtonStyle>
      </form>
    </Login>
    );
      
};


export default LoginForm;