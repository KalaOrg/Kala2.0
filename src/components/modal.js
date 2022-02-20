import React, { useEffect, useState } from 'react'

const TicketForm = (props) => {
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
        first_name: enterName, 
        department: department,
        issue_title: ticketTitle,
        issue_summary: ticketSummary,
        priority: priority
      }
      const metaData = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      }
      fetch('/add', metaData)
        .then(data => data.json())
        .then(tickets => props.setTickets(tickets))//** may have to revise based on hook names **
    }
    catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className='container' id='form-container'>
      <h2>Ticket Entry Form</h2>
      <form onSubmit={submitTicket}>
        <div className="form-row">
          <div className="form-group col-md-5">
            <label htmlFor='enter-name'>Name</label>
            <br></br>
            <input type='text' className="form-control" required value={enterName} onChange={(e => setName(e.target.value))}></input>
          </div>
          <br></br>
          <div className="form-group col-md-5">
            <label htmlFor='enter-department'>Department</label>
            <br></br>
              <select className="form-control" required onChange={(e => setDepartment(e.target.value))}>
                <option selected disabled value="">Choose a department</option>
                <option value='1'>Software Engineering</option>
                <option value='2'>Facilities</option>
                <option value='3'>Marketing</option>
              </select>
          </div>
        </div>
        <br></br>
        <div>
          <h3>Ticket</h3>
          <label htmlFor='enter-ticket-title'>Title</label>
          <br></br>
          <input type='text' className="form-control" required value={ticketTitle} onChange={(e => setTicketTitle(e.target.value))}></input>
          <br></br>
          <label htmlFor='enter-ticket-summary'>Summary</label>
          <br></br>
          <textarea type='text' className="form-control" required value={ticketSummary} onChange={(e => setTicketSummary(e.target.value))}></textarea>
        </div>
        <br></br>
        <div>
          <label htmlFor='enter-priority'>Priority </label>
          <br></br>
            <select className='form-control' required onChange={(e => setPriority(e.target.value))}>
              <option selected disabled value="">Choose a priority</option>
              <option value='1'>Low</option>
              <option value='2'>Medium</option>
              <option value='3'>High</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default TicketForm;