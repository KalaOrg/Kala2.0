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

  //this successfully filters all of the tickets in our ticketItems array into a new array based on its priority
  const received = ticketItems.filter(
    (ticket) => ticket.props.ticket.status === 'received'
  );
  const inProgress = ticketItems.filter(
    (ticket) => ticket.props.ticket.status === 'in_progress'
  );
  const completed = ticketItems.filter(
    (ticket) => ticket.props.ticket.status === 'completed'
  );
  console.log('RECEIVED:',received);
  // console.log('MEDIUM:', mediumPriority);
  // console.log('LOW:', lowPriority);

  if (props.priority === 'received') {
    return <div id={props.status}>{received}</div>;
  }
  if (props.priority === 'in_progress') {
    return <div id={props.status}>{inProgress}</div>;
  }
  if (props.priority === 'completed') {
    return <div id={props.status}>{completed}</div>;
  }

  //original return statement with different appraoches to filtering without a conditional return statement
  // return (
  //   <div>
  //     <div id={props.priority}>
  //       {console.log('PROPS.PRIORITY:', props.priority)}
  //       {/* {console.log('FILTERED TICKETS:', filteredTickets)} */}
  //       {ticketItems}
  //       {/* {ticketItems.filter((ticket) => ticket.priority == props.priority)} */}
  //       {/* {filteredTickets} */}
  //     </div>
  //   </div>
  // );
};

export default UserTicketColumn;