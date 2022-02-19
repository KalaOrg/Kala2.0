const fs = require('fs');
const path = require('path');

const db = require('../model/ticketModel');

const ticketController = {};

ticketController.getTickets = (req, res, next) => {
  const query =
    'SELECT tt.first_name, dt.name AS department, tt.issue_title, tt.issue_summary, st.name AS status, pt.name AS priority, tt.date FROM ticket_table AS tt JOIN department_table AS dt ON tt.department=dt._id JOIN status_table AS st ON tt.status=st._id JOIN priority_table AS pt ON tt.priority=pt._id;';

  db.query(query)
    .then((response) => {
      console.log(response);
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
    status,
    priority,
  } = req.body;
  const date = new Date();
  const _id = Math.floor(Math.random() * 1000);

  res.locals.data = {
    _id: _id,
    first_name: first_name,
    department: department,
    issue_title: issue_title,
    issue_summary: issue_summary,
    status: status,
    priority: priority,
    time: date,
  };

  fs.appendFile(
    path.resolve(__dirname, '../data.json'),
    JSON.stringify(res.locals.data, null, 2),
    'UTF-8',
    (err) => {
      if (err) {
        return next({
          log: `ticketController.addTickets: ERROR: ${err}`,
          message: {
            err: 'ticketController.addTickets: ERROR: Check server logs for details',
          },
        });
      }
      return next();
    }
  );
};

ticketController.removeTicket = (req, res, next) => {
  const ticketId = req.body._id;
  const thisQuery = 'DELETE FROM ticket_table WHERE _id = $1'
  const values = [ticketId];
  db.query(thisQuery, values)
  .then((data) => {next()})
  .catch((err) => {
    next({
      log: `ticketController.removeTicket: ERROR: ${err}`,
      message: {
        err: 'ticketController.removeTicket: ERROR: Check server logs for details',
      }});
  }
  )};
module.exports = ticketController;
