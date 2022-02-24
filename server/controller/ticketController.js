const fs = require('fs');
const path = require('path');

const db = require('../model/DB');

const ticketController = {};


ticketController.getTickets = (req, res, next) => {
  const query =
    'SELECT tt._id, tt.first_name, dt.name AS department, tt.issue_title, tt.issue_summary, st.name AS status, pt.name AS priority, tt.date FROM ticket_table AS tt JOIN department_table AS dt ON tt.department=dt._id JOIN status_table AS st ON tt.status=st._id JOIN priority_table AS pt ON tt.priority=pt._id;';

  db.query(query)
    .then((response) => {
      res.locals.tickets = response.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ticketController.getTickets: ERROR: ${err}`,
        message: {
          err: 'ticketController.getTickets: ERROR: Check server logs for details',
        },
      });
    });
};

ticketController.addTicket = (req, res, next) => {
  const {
    first_name,
    department,
    issue_title,
    issue_summary,
    priority,
  } = req.body;
  const status = 1;
  const date = new Date();

  const query =
    'INSERT INTO ticket_table (first_name, department, issue_title, issue_summary, status, priority, date) VALUES ($1, $2, $3, $4, $5, $6, $7);';
  const values = [
    first_name,
    department,
    issue_title,
    issue_summary,
    status,
    priority,
    date,
  ];

  console.log()

  // db.query(query, values)
  //   .then((data) => {
  //     next();
  //   })
  //   .catch((err) => {
  //     return next({
  //       log: `ticketController.addTicket: ERROR: ${err}`,
  //       message: {
  //         err: 'ticketController.addTicket: ERROR: Check server logs for details',
  //       },
  //     });
  //   });
};

ticketController.removeTicket = (req, res, next) => {
  const ticketId = req.body._id;
  const thisQuery = 'DELETE FROM ticket_table WHERE _id = $1';
  const values = [ticketId];
  console.log('REQ BODY ID:', req.body._id)
  db.query(thisQuery, values)
    .then((data) => {
      next();
    })
    .catch((err) => {
      next({
        log: `ticketController.removeTicket: ERROR: ${err}`,
        message: {
          err: 'ticketController.removeTicket: ERROR: Check server logs for details',
        },
      });
    });
};


ticketController.getFilteredTickets = async (req, res, next) => {
  try {
    const { user_id, status } = req.body;
    const query = 'SELECT tt._id, tt.issue_title, tt.issue_summary, tt.date, pt.name AS priority, users.userName, dt.name AS department, st.name AS status FROM ticket_table AS tt JOIN priority_table AS pt ON pt._id = tt.priority_id JOIN users ON users._id = tt.user_id JOIN department_table AS dt ON dt._id = tt.department_id JOIN status_table AS st ON st._id = tt.status_id WHERE tt.user_id = $1 AND tt.status_id = $2';
    const resultFilteredTickets = await db.query(query,[user_id,status]);
    console.log()
    res.locals.result = {};
    res.locals.result.STATUS = true;
    res.locals.result.filteredTickets = [];
    //resultFilteredTickets.rows.map(ticket=>res.locals.result.filteredTickets.push(ticket));
    for( let i =0 ; i < resultFilteredTickets.rows.length ; i++){
      res.locals.result.filteredTickets.push(resultFilteredTickets.rows[i]);
    }
    next();

  } catch (err) {
    return next({
      log: `ticketController.getFilteredTickets: ERROR: ${err}`,
      message: {
        err: 'ticketController.getFilteredTickets: ERROR: Check server logs for details',
      },
    });
  }
};


module.exports = ticketController;
