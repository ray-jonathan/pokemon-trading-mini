const express = require('express');
const PORT = 3000;
const app = express();
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');
app.use(express.urlencoded({extended:true}));

const userRouter = require('./routes/users');



app.listen(PORT, () => {
    console.log(`You're tuning in to DJ Brock on ${PORT}AM`);
});