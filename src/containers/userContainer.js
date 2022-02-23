import React, { useEffect, useState } from 'react';
import UserTicketColumn from '../components/userTicketColumn'

/* USER CONTAINER
  *LIST TICKETS BY STATUS - RECEIVED, IN PROGRESS, COMPLETED
  *INSIDE OF RECEIVED AND IN PROGRESS:
    1. LIST TICKETS IN ORDER FROM HIGH TO LOW PRIORITY 
  *INSIDE COMPLETED TICKETS, DISPLAY ALL COMPLETED TICKETS IN THE ORDER THEY WERE FINISHED

*/
const UserContainer = (props) => {

  return (
    <div className='user-ticket-list'>
      <div className='columns' id='received-status'>
        <UserTicketColumn status='received' />
      </div>
      <div className='columns' id='inProgress-status'>
        <UserTicketColumn status='in_progress' />
      </div>
      <div className='columns' id='completed-status'>
        <UserTicketColumn status='completed' />
      </div>
    </div>
  );
}

export default UserContainer;