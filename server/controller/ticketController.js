const fs = require('fs');
const path = require('path');

const ticketController = {};

ticketController.getTickets = (req, res, next) => {
  fs.readFile(
    path.resolve(__dirname, '../data.json'),
    'UTF-8',
    (err, data) => {
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
    }
  );

}

module.exports = ticketController;