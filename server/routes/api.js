const express = require('express');
const router = express.Router();

const ticketController = require('../controller/ticketController');
const userController = require('../controller/userController');

router.get('/test', (req, res) => res.json({ msg: 'backend works' }));

router.get('/', ticketController.getTickets, (req, res) => {
  res.status(200).json(res.locals.tickets);
});

router.post(
  '/add',
  ticketController.addTicket,
  ticketController.getTickets,
  (req, res) => {
    res.status(200).json(res.locals.tickets);
  }
);

router.delete(
  '/remove',
  ticketController.removeTicket,
  ticketController.getTickets,
  (req, res) => {
    res.status(200).json(res.locals.tickets);
  }
);

router.post('/login',userController.loginUser, (req,res)=>{
  return res.status(200).json(res.locals.result);
});

router.get('/usernames',userController.getUsers,(req,res)=>{
  return res.status(200).json(res.locals.result);
});

module.exports = router;
