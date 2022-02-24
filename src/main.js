import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './containers/headerContainer';
// import TicketContainer from './containers/ticketsContainer';
// import TicketForm from './components/modal';
import UserContainer from './containers/userContainer';
import TicketForm from './components/modal';
import './style.css'
//import login file and create path
//import userContainer file


const App = () => {
  return (
    <div>

    <Header />
    <Routes>
      <Route exact path='/' element={<UserContainer/>}></Route>
      <Route exact path='/form' element={<TicketForm/>}></Route>
    </Routes>

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