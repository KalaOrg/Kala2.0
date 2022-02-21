import React, { useEffect, useState } from 'react';


const Ticket = (props) => {
  //const { _id, first_name, department, issue_title, issue_summary, status, priority, date } = state.props
  
  useEffect(() => {

  })

  return (
    <article>
      <div className='ticketHead'>
        <div>
          <h3>{props.ticket.issue_title}</h3>
        </div>
        
      </div>
      <div>
        <ul className='ticketDetailList'>
          {/* {console.log('PROPS:', props)} */}
          <li className='ticketDetail'>Name: {props.ticket.first_name}</li>
          <li className='ticketDetail'>Summary: {props.ticket.issue_summary}</li>
          <li className='ticketDetail'>Department: {props.ticket.department}</li>
          <li className='ticketDetail'>Priority: {props.ticket.priority}</li>
          <li className='ticketDetail'>Status: {props.ticket.status}</li>
          <li className='ticketDetail'>Date: {props.ticket.date}</li>
        </ul>
      </div>
    </article>
  );
};

export default Ticket; 