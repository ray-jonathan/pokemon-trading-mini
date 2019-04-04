// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const tradeRouter = Router();
const {getTrade} = require('../controllers/trades'); // object of functions from controllers page

tradeRouter.get('/:id', getTrade);

module.exports = tradeRouter;