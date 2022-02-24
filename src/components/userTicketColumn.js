import React, { useContext, useEffect, useState } from 'react';
import Ticket from './tickets';
import { Context } from '../main';

const UserTicketColumn = (props) => {
  const ID = useContext(Context);
  const [tickets, setTickets] = useState([]);

  let d = JSON.parse(localStorage.getItem('Kala_Token'));

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

  //in case of problems use d.user._id || +props.id

  const fetchTickets = () => {
    console.log('LEts see ID ' , ID)
    fetch('/api/filteredtickets',{
      method : 'POST',
      headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({user_id : d.user._id, status : props.status})
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