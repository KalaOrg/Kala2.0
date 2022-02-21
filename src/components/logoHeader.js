import React from 'react'
import { Path } from 'react-router';
import logo from '../pictures/logo.png'
import { Link } from 'react-router-dom'

const LogoHeader = () => {
    return (
      <nav className="navbar navbar-light navbar-expand-md bg-primary navbar-fixed-top" id='navBar'>
        <div className="navbar-brand ms-auto">
          <img id='logo' alt='logo' src={logo}/>
        </div>
        <div className="nav navbar-nav ml-auto w-100 justify-content-end">
          <Link to="/form">
            <button className="btn btn-outline-light">Create New Ticket</button>
          </Link>
            <button className="btn btn-outline-secondary">Sign In</button>
        </div>
      </nav>
    )
}

export default LogoHeader;