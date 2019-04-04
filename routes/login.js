// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const loginRouter = Router();
const {logMeIn, getUserProfile} = require('../controllers/login'); // object of functions from controllers page

loginRouter.get('/', logMeIn);
loginRouter.post('/login', getUserProfile);

module.exports = loginRouter;