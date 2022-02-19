import { useEffect } from 'react';
import { ProgressPlugin, ProvidePlugin } from 'webpack';
import Ticket from '../components/ticket.js';

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
  ticketItems.map((ticket, index) => (
    <Ticket key={_id} index={index} ticket={ticket} />
    ))}
            

  const fetchTickets = () => {
    fetch('/api')
    .then(response => response.json())
    .then(data => setTickets(data.filter(() => {
        return (props.priortity === data.priority);
      })))
  }
  
  useEffect(() => {
    fetchTickets();
  })

  return (
    <div>
      <div id={props.priority}>
        {ticketItems}
      </div>
    </div>
  );
}

export default TicketColumn;