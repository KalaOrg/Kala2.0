import React, { useEffect, useState } from "react";
import UserTicketColumn from "../components/userTicketColumn";

/* USER CONTAINER
  *LIST TICKETS BY STATUS - RECEIVED, IN PROGRESS, COMPLETED
  *INSIDE OF RECEIVED AND IN PROGRESS:
    1. LIST TICKETS IN ORDER FROM HIGH TO LOW PRIORITY 
  *INSIDE COMPLETED TICKETS, DISPLAY ALL COMPLETED TICKETS IN THE ORDER THEY WERE FINISHED

*/


const UserContainer = (props) => {
  const id = localStorage.getItem("id");

  
  return (
  
    <div>
      <div>
         <select className='form-control' required onChange={(e => setPriority(e.target.value))}>
          <option value="">Priority</option>
          <option value='1'>Low</option>
          <option value='2'>Medium</option>
          <option value='3'>High</option>
         </select>
      </div>
              
    
    <div className="ticket-list">
      <div className="columns">
        <h3>Received</h3>
        <UserTicketColumn id={id} status={1} />
      </div>
      <div className="columns">
      <h3>In Progress</h3>
        <UserTicketColumn id={id} status={2} />
      </div>
      <div className="columns">
      <h3>Finished</h3>
        <UserTicketColumn id={id} status={3} />
      </div>
    </div>

    </div>
  );
};

export default UserContainer;
