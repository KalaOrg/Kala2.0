//import { database } from 'pg/lib/defaults';
import React, { useEffect, useState } from 'react';
//import { ProgressPlugin } from 'webpack';
import Ticket from '../components/ticket.js'
import TicketColumn from '../components.ticketColumns.js'
import { ProgressPlugin } from 'webpack';

const TicketContainer = () => {
 
  

  useEffect(() => {
    //where fetch request will go 
  })

  const [ ticketPriority, sortTickets ] = useState([
    {

    }
  ])


  return (
    <div className='ticket-list'>
      <div id='high-priority'>
          <TicketColumn priority={props.priority} />
      </div>
      <div id='medium-priority'>
        <TicketColumn priority={props.priority} />
      </div>
      <div id='low-priority'>
        <TicketColumn priority={props.priority} />
      </div>
    </div>
  );
}

export default TicketContainer;