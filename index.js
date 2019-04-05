// EXPRESS SET UP
const express = require('express');
const PORT = 3000;
const app = express();
// VIEW ENGINE SET UP
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');
app.use(express.urlencoded({extended:true}));
// ROUTES
const loginRouter = require('./routes/login');
app.use('/', loginRouter);
const userRouter = require('./routes/users');
app.use('/user', userRouter);
const cardRouter = require('./routes/cards');
app.use('/cards', cardRouter);
const tradeRouter = require('./routes/trades');
app.use('/trade', tradeRouter);





// SERVER
app.listen(PORT, () => {
    console.log(`You're tuning in to DJ Brock on ${PORT}FM`);
});