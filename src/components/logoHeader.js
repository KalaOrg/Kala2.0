import React from 'react'
import { Path } from 'react-router';
import logo from '../pictures/logo.png'

const LogoHeader = () => {
    return (
        <div>
            <img alt='logo' src={logo}/>
        </div>
    )
}

export default LogoHeader;