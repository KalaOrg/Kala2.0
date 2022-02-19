import { useEffect } from 'react';
import Ticket from '../components/ticket.js';

const TicketColumn = () => {
  
  const [tickets, setTickets] = useState([
    {
      _id: data._id,
      first_name: data.first_name,
      department: data.department,
      issue_title: data.issue_title,
      issue_summary: data.issue_summary,
      status: data.status,
      priority: data.priority,
      time: data.time,
    },
  ]);

  useEffect(() => {
    fetch()
  })

  return (
    <div>
      <div id='high-priority'>
        {tickets.map((ticket, index) => (
          <Ticket key={index} index={index} ticket={ticket} />
        ))}
      </div>
      <div id='medium-priority'>
        <Ticket />
      </div>
      <div id='low-priority'>
        <Ticket />
      </div>
    </div>
  );
}

export default TicketColumn;