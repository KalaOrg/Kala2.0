import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { UNSAFE_NavigationContext } from 'react-router';
// import { getHooks } from 'html-webpack-plugin';
// import render from 'react-dom';



  //condition for rendering if password is right/wrong
    //wrong 
    //window.history or local storage

function LoginForm( { setToken }) {
  // const { register, handleSubmit } = useForm();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  //does loginUser belong outside?? tutorial has it outside.
  const handleSubmit = (e) => {
    console.log('LOGIN E ', e);
    e.preventDefault();   
    fetch('http://localhost:3000/api/login', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
         login, 
         password,
      }), //log in and password
    })
    .then(result => { //what server is giving us back can be empty array
      // console.log(result);
      return result.json()
      //check if result.status is true
      //if so, display homepage for user (stretch feature: create local storage that will keep all of the user's info)
    })
    .then(data => {
      console.log('DATA ', data);
      const token = data;
      setToken(token);
    })
    .catch(err => {
    return next({
     log: `Error fetching data. See console for more details. ${err}`,
     status: 400,
     message: { err: 'Check handleSubmit in loginPage.js' }
    }) 
   }); //if field is bad or cannot get data

  return (
    // Old code with useForm hook
    // <div>
    //   <form onSubmit={handleSubmit(onSubmit)} method="POST">
    //     <p>Username</p>
    //     <input type="userName" name="userName" {...register("userName")}/>
    //     <p>Password</p>
    //     <input type="password" name="password" {...register("password")}/>
    //     {/* <p>    </p> */}
    //     <input type="submit" />
    //   </form>
    // </div>
    <div>
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
  }    
};

//??????
// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default LoginForm;