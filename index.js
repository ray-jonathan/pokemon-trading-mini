// EXPRESS SET UP
const express = require('express');
const PORT = 3000;
const app = express();
// SESSION SETUP
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// VIEW ENGINE SET UP
app.use(session({
    store: new FileStore(),
    secret: 'fjdlsfafklahfalkfhka'
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
app.use('/cards', cardRouter);
const tradeRouter = require('./routes/trades');
app.use('/trade', tradeRouter);





// SERVER
app.listen(PORT, () => {
    console.log(`You're tuning in to DJ Brock on ${PORT}FM`);
});