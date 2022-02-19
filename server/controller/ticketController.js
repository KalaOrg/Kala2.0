const fs = require('fs');
const path = require('path');

const ticketController = {};

ticketController.getTickets = (req, res, next) => {
  fs.readFile(path.resolve(__dirname, '../data.json'), 'UTF-8', (err, data) => {
    if (err) {
      return next({
        log: `ticketController.getTickets: ERROR: ${err}`,
        message: {
          err: 'ticketController.getTickets: ERROR: Check server logs for details',
        },
      });
    }
    const parsedData = JSON.parse(data);
    res.locals.tickets = parsedData;
    return next();
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
  // delete ticket

  return next();
}
module.exports = ticketController;
