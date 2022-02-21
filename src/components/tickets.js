import React, { useEffect, useState } from 'react';


const Ticket = (props) => {
  //const { _id, first_name, department, issue_title, issue_summary, status, priority, date } = state.props
  
  useEffect(() => {

  })

  return (
    <article>
      <div className='ticketHead'>
        <div>
          <h3>{props.issue_title}</h3>
          <h3>Issue Title Here</h3>
        </div>
        <button>X</button>
      </div>
      <div>
        <ul className='ticketDetailList'>
          {/* {console.log('props:', props)} */}
          <li className='ticketDetail'>Summary: {props.issue_summary}</li>
          <li className='ticketDetail'>Name: {props.first_name}</li>
          <li className='ticketDetail'>Department: {props.department}</li>
          <li className='ticketDetail'>Priority: {props.priority}</li>
          <li className='ticketDetail'>Status: {props.status}</li>
          <li className='ticketDetail'>Date: {props.date}</li>
        </ul>
      </div>
    </article>
  );
};

export default Ticket; 