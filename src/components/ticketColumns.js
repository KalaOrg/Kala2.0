import React, { useEffect, useState } from 'react';
import Ticket from './tickets';

const TicketColumn = (props) => {
  const [tickets, setTickets] = useState([]);

  // {
  //     _id: data._id,
  //     first_name: data.first_name,
  //     department: data.department,
  //     issue_title: data.issue_title,
  //     issue_summary: data.issue_summary,
  //     status: data.status,
  //     priority: data.priority,
  //     time: data.time,
  //   },
  
  const ticketItems = [];
  for (let i = 0; i < tickets.length; i++) {
    console.log('TICKETS LENGTH:', tickets.length);
    console.log('TICKETS:', tickets)
    ticketItems.push(<Ticket key={i} ticket={tickets[i]} />);
    console.log('TICKET ITEMS:', ticketItems)
  }

  // ticketItems.map((ticket, index) => (
  //   <Ticket key={_id} index={index} ticket={ticket} />
  //   ))

  const fetchTickets = () => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) =>
        setTickets(
          data.filter(() => {
            return props.priortity === data.priority;
          })
        )
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <div id={props.priority}>
        {/* {console.log('tickets:', tickets)}
        {console.log('ticket items:', ticketItems)} */}
        {ticketItems}
        <p>hey there</p>
      </div>
    </div>
  );
};

export default TicketColumn;
