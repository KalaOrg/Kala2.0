import React, { useEffect, useState } from 'react'
import LogoHeader from '../components/logoHeader';
import TicketEntryButton from '../components/entryButton';


const Header = ({ setToken }) => {
    return (
      <div>
        <LogoHeader setToken={setToken}/>
      </div>
    )
}

export default Header;