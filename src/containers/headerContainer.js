import React, { useEffect, useState } from 'react'
import LogoHeader from '../components/logoHeader';
import TicketEntryButton from '../components/entryButton';

const priorityView = () => {
  <select className='form-control' required onChange={(e => setPriority(e.target.value))}>
    <option value="">Choose a priority</option>
    <option value='1'>Low</option>
    <option value='2'>Medium</option>
     <option value='3'>High</option>
  </select>
}

const Header = (props) => {
    return (
      <div>
        <LogoHeader/>
          
      </div>
    )
}

export default Header;