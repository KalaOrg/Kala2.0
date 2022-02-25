import ReactDOM from 'react-dom';
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './containers/headerContainer';
import UserContainer from './containers/userContainer';
import './style.css'
import LoginForm from './components/loginPage';
import { createBrowserHistory } from 'history'
import useToken from './components/useToken.js'
import TicketForm from './components/modal';

export const Context = createContext('User ID');

const App = () => {
  const newHistory = createBrowserHistory();
  const { token, setToken } = useToken();
  const [user_id, setID] = useState('');

  useEffect(() => {
    if (token && token.user) {
      setID(token.user._id);
    }
  }, [token]);


  if (!token || token.STATUS === false) {
    return (
      <div>
        <LoginForm setToken={setToken} />
      </div>
    )
  }

  return (
    <div>
      <Header setToken={setToken}/>
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