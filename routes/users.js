// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const userRouter = Router();
const {getUserProfile} = require('../controllers/users'); // object of functions from controllers page

userRouter.get('/', getUserProfile);

module.exports = userRouter;