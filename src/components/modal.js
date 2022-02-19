import React, { useEffect, useState } from 'react'

const TicketModal = () => {
  //states
  [enterName, setName] = useState('');
  [department, setDepartment] = useState(''); //from dropdown
  [ticketTitle, setTicketTitle] = useState('');
  [ticketSummary, setTicketSummary] = useState('');
  [priority, setPriority] = useState('')

  return (
    <div>
    {/* <!-- Button trigger modal --> */}
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      New Ticket Entry
    </button>
    
    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
         
          <form>
            <div class="modal-body">
                <label for='enterName'>Name</label>
                <input type='text' value={enterName} onChange={(e => setName(e.target.value))}></input>
                <label for='enterName'>Department</label>
                <input type='text' value={enterName} onChange={(e => setName(e.target.value))}></input>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
  )
}

export default TicketModal;