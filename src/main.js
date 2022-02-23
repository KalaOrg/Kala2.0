import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './containers/headerContainer';
import TicketContainer from './containers/ticketsContainer';
import TicketForm from './components/modal';
import './style.css'
//import login form
import LoginForm from './components/loginPage.jsx';


//import Switch from react router dom
  //makes sure only one route shows at a time
  //Change routes to router in import?


//check local storage to see if you're logged in
  //if not push to login endpoint
  // if you are go to '/' endpoint
    //root endpoint will filter based on username



const App = () => {
  return ( 
    <div>
    <Header />
    {/* change to router and add switch*/}
    <Routes>
        <Route exact path='/' element={<TicketContainer/>}></Route>
        <Route exact path='/form' element={<TicketForm/>}></Route>
        {/* create route to login page */}
        <Route exact path='/login' element={<LoginForm/>}></Route>
    </Routes>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);