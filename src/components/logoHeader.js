import React, { useState } from 'react';
import { Path } from 'react-router';
import logo from '../pictures/kala.png'
import { Link } from 'react-router-dom'

const LogoHeader = ({setToken}) => {

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      STATUS: false,
      user: {
        id: undefined
      }
    };
    setToken(data);
  }

    return (
      <nav className="navbar navbar-light navbar-expand-md bg-primary navbar-fixed-top" id='navBar'>
        <div className="navbar-brand ms-auto">
          <Link to='/'><img id='logo' alt='logo' src={logo}/></Link>
        </div>
        <div className="nav navbar-nav ml-auto w-100 justify-content-end">
          <Link to="/form">
            <button className="btn btn-outline-light">Create New Ticket</button>
          </Link>
            <button className="btn btn-outline-secondary" onClick={handleClick}>Log Out</button>
        </div>
      </nav>
    )
}

export default LogoHeader;