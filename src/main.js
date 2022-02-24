import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './containers/headerContainer';
// import TicketContainer from './containers/ticketsContainer';
// import TicketForm from './components/modal';
import UserContainer from './containers/userContainer';
import TicketForm from './components/modal';
import './style.css'
//import login form
import LoginForm from './components/loginPage';
import { createBrowserHistory } from 'history'



//import Switch from react router dom
  //makes sure only one route shows at a time
  //Change routes to router in import?


//check local storage to see if you're logged in
  //if not push to login endpoint
  // if you are go to '/' endpoint
    //root endpoint will filter based on username


//NOTE: rolled back react-router-dom to v5
  //changed Routes to BrowserRouter on lines 35 and 42.  Added Switch to 36 and 41

const App = () => {

//   return ( 
//     <div>
//     <Header />
//     <Routes>
//       <Route exact path='/' element={<TicketContainer/>}></Route>
//       <Route exact path='/form' element={<TicketForm/>}></Route>
//     </Routes>

  const newHistory = createBrowserHistory();
  const [token, setToken] = useState();

  if(!token) {
    return <LoginForm setToken={setToken} />
  }

  return ( 
    <div>
      {/* <TicketForm/> */}
    <UserContainer/>
    <Header />
{/* //     <Routes>
//       <Route exact path='/' element={<UserContainer/>}></Route>
//       <Route exact path='/form' element={<TicketForm/>}></Route>
//     </Routes> */}
    {/* <LoginForm /> */}
    {/* change to router and add switch*/}
    {/* <BrowserRouter history={newHistory}>
      <Switch>
        <Route exact path='/' element={<TicketContainer/>}><div>This works</div></Route>
        <Route exact path='/form' element={<TicketForm/>}><div>This works too</div></Route>
        {/* create route to login page */}
        {/* <Route exact path='/' element={<LoginForm/>}></Route>
      </Switch>
    </BrowserRouter> */} 
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);