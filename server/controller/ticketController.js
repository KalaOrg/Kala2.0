const fs = require('fs');
const path = require('path');

const db = require('../model/DB');

const ticketController = {};


ticketController.addTicket = async (req, res, next) => {
  try{
    const { login, department_id, issue_title, issue_summary, status_id, priority_id } = req.body;
    const date = new Date();
    const resultId = await db.query(`SELECT users._id FROM users WHERE users.login = '${login}'`);
    console.log(resultId.rows)
    const query = 'INSERT INTO ticket_table (user_id, department_id, issue_title, issue_summary, status_id, priority_id, date) VALUES ($1, $2,$3,$4,$5,$6,$7)';
    const resultInsertion = await db.query(query,[resultId.rows[0]._id,department_id,issue_title,issue_summary,status_id, priority_id,date]);
    return next();
  }
  catch (err){
    return next({
      log: `ticketController.addTicket: ERROR: ${err}`,
      message: {
        err: 'ticketController.addTicket: ERROR: Check server logs for details',
      },
    });
  }
};

ticketController.removeTicket = (req, res, next) => {
  const {id} = req.body;
  const thisQuery = 'DELETE FROM ticket_table WHERE _id = $1';
  db.query(thisQuery, [id])
    .then((data) => {
      console.log(data);
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
    console.log(req.body);
    const query = 'SELECT tt._id, tt.issue_title, tt.issue_summary, tt.date, pt.name AS priority, users.userName, dt.name AS department, st.name AS status FROM ticket_table AS tt JOIN priority_table AS pt ON pt._id = tt.priority_id JOIN users ON users._id = tt.user_id JOIN department_table AS dt ON dt._id = tt.department_id JOIN status_table AS st ON st._id = tt.status_id WHERE tt.user_id = $1 AND tt.status_id = $2';
    const resultFilteredTickets =await db.query(query,[user_id,status]);
    res.locals.result = {};
    res.locals.result.STATUS = true;
    res.locals.result.filteredTickets = [];
    resultFilteredTickets.rows.map(ticket=>res.locals.result.filteredTickets.push(ticket));
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
