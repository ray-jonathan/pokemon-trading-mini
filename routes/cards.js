// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const cardRouter = Router();
const {getCards} = require('../controllers/cards'); // object of functions from controllers page

cardRouter.get('/', getCards);

module.exports = cardRouter;