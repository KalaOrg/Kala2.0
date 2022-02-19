import React, { useEffect, useState } from 'react'

const TicketForm = () => {
  //states
  const [enterName, setName] = useState('');
  const [department, setDepartment] = useState(''); //from dropdown
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketSummary, setTicketSummary] = useState('');
  const [priority, setPriority] = useState('')

  const submitTicket = (e) => {
    e.preventDefault();
    try{
      const body = {
        name: enterName, 
        department: department,
        title: ticketTitle,
        summary: ticketSummary,
        priority: priority
      }
      const meta = {
        method: 'POST',
        headers: {'Content-Type: application/json'},
        body: JSON.stringify(body)
      }
      const
    }
    catch{

    }
  }

  return (
    <div>
      <h2>Ticket Entry Form</h2>
      <form onSubmit={submitTicket}>
        <div>
          <label htmlFor='enter-name'>Name</label>
          <input type='text' value={enterName} onChange={(e => setName(e.target.value))}></input>
        </div>
        <div>
          <label htmlFor='enter-department'>Department</label>
            <select onChange={(e => setDepartment(e.target.value))}>
              <option value='1'>Software Engineering</option>
              <option value='2'>Facilities</option>
              <option value='3'>Marketing</option>
            </select>
        </div>
        <div>
          <h3>Ticket</h3>
          <label htmlFor='enter-ticket-title'>Title</label>
          <input type='text' value={ticketTitle} onChange={(e => setTicketTitle(e.target.value))}></input>
          <br></br>
          <label htmlFor='enter-ticket-summary'>Summary</label>
          <input type='text' value={ticketSummary} onChange={(e => setTicketSummary(e.target.value))}></input>
        </div>
        <div>
          <label htmlFor='enter-priority'>Priority</label>
            <select onChange={(e => setPriority(e.target.value))}>
              <option value='1'>Software Engineering</option>
              <option value='2'>Facilities</option>
              <option value='3'>Marketing</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default TicketForm;