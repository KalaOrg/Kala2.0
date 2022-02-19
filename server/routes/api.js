const express = require('express');
const router = express.Router();

const ticketController = require('../controller/ticketController')

router.get('/test', (req, res) => res.json({ msg: 'backend works' }));

router.get('/', ticketController.getTickets, (req, res) => {
  res.status(200).json(res.locals.tickets);
})

module.exports = router;