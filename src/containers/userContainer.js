import React, { useEffect, useState } from "react";
import UserTicketColumn from "../components/userTicketColumn";

/* USER CONTAINER
  *LIST TICKETS BY STATUS - RECEIVED, IN PROGRESS, COMPLETED
  *INSIDE OF RECEIVED AND IN PROGRESS:
    1. LIST TICKETS IN ORDER FROM HIGH TO LOW PRIORITY 
  *INSIDE COMPLETED TICKETS, DISPLAY ALL COMPLETED TICKETS IN THE ORDER THEY WERE FINISHED

*/

const Columns = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 20,
    }}
  >
    <div>RECEIVED</div>
    <div>IN PROGRESS</div>
    <div>COMPLETED</div>
  </div>
);

const UserContainer = (props) => {
  const id = localStorage.getItem("id");
  return (
    <div className="ticket-list">
      <div className="columns">
        <h3>Received</h3>
        <UserTicketColumn id={id} status={1} />
      </div>
      <div className="columns">
        <UserTicketColumn id={id} status={2} />
      </div>
      <div className="columns">
        <UserTicketColumn id={id} status={3} />
      </div>
    </div>
  );
};

export default UserContainer;
