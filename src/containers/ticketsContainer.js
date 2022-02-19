//import { database } from 'pg/lib/defaults';
import React, { useEffect, useState } from 'react';
//import { ProgressPlugin } from 'webpack';
import Ticket from '../components/ticket.js'
import TicketColumn from '../components.ticketColumns.js'

const TicketContainer = () => {
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