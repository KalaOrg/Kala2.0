import React, { useEffect, useState } from 'react';
import TicketColumn from '../components/ticketColumns'

const TicketContainer = (props) => {
  // useEffect(() => {
  //   //where fetch request will go 
  // })

  //const [ ticketPriority, sortTickets ] = useState([])


  return (
    <div className='ticket-list'>
      <div id='high-priority'>
        <TicketColumn priority='high' />
      </div>
      <div id='medium-priority'>
        <TicketColumn priority='medium' />
      </div>
      <div id='low-priority'>
        <TicketColumn priority='low' />
      </div>
    </div>
  );
}

export default TicketContainer;