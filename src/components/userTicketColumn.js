import React, { useEffect, useState } from 'react';
import Ticket from './tickets';

const UserTicketColumn = (props) => {
  const [tickets, setTickets] = useState([]);

  const ticketItems = [];
  for (let i = 0; i < tickets.length; i++) {
    ticketItems.push(
      <Ticket
        key={i}
        ticketID={tickets[i]._id}
        ticket={tickets[i]}
        setTickets={setTickets}
        tickets={tickets}
      />
    );
  }


  const fetchTickets = () => {
    fetch('/api/filteredtickets',{
      method : 'POST',
      headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({user_id : 2, status : props.status})
    })
      .then((res) => res.json())
      .then((tickets) => {
        setTickets([...tickets.filteredTickets])
      })
      .catch((err) => console.log('Error getting tickets.', err));
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <div>
      {ticketItems.filter((ticket) => ticket.props.ticket.status === 'received')}
    </div>
    <div>
      {ticketItems.filter((ticket) => ticket.props.ticket.status === 'in_progress')}
    </div>
    <div>
      {ticketItems.filter((ticket) => ticket.props.ticket.status === 'completed')}
    </div>
    </div>
  );
};

export default UserTicketColumn;