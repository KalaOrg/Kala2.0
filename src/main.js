import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './containers/headerContainer';
import UserContainer from './containers/userContainer';
import './style.css'
import LoginForm from './components/loginPage';
import { createBrowserHistory } from 'history'
import useToken from './components/useToken.js'
import TicketForm from './components/modal';


const App = () => {
  const newHistory = createBrowserHistory();
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div>
        <LoginForm setToken={setToken} />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <UserContainer />
      <TicketForm />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);