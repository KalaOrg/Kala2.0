import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
// import { getHooks } from 'html-webpack-plugin';
// import render from 'react-dom';



  //condition for rendering if password is right/wrong
    //wrong 
    //window.history or local storage

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('LOGIN DATA ', data);
    try {  
      fetch('http://localhost:3000/api/login', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data), //log in and password
    })
    .then(result => { //what server is giving us back can be empty array
      console.log(result);
      //check if result.status is true
      //if so create local storage that will keep all of the user's info
    })
    // .then(data => {
    //   console.log('DATA ', data)
    // })
    }
    catch(err) {console.log(err)}; //if field is bad or cannot get data
  }

  //create a callback that checks for correct password
  const validate = () => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <p>Username</p>
        <input type="userName" name="userName" {...register("userName")}/>
        <p>Password</p>
        <input type="password" name="password" {...register("password")}/>
        {/* <p>    </p> */}
        <input type="submit" />
      </form>
    </div>
    );
};


export default LoginForm;