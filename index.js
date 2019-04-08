require('dotenv').config();
// EXPRESS SET UP
const express = require('express');
const port = process.env.PORT;
const app = express();
// SESSION SETUP
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// SAFETY SETUP
const helmet = require('helmet');
app.use(helmet());
// VIEW ENGINE SET UP
app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET
}));
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
app.use('/cards', (cardRouter));
const tradeRouter = require('./routes/trades');
app.use('/trade', tradeRouter);

// console.log(req);


function add10Cards() {
    const randomCards = []
    for(let i=0; i< 10; i++) {
        randomCards.push(Math.floor(Math.random() * Math.floor(100)))
    };
    return randomCards
};
// console.log(add10Cards());


// SERVER
app.listen(port, () => {
    console.log(`You're tuning in to DJ Brock on ${port}FM`);
});
