

// functions for res.render-ing user info from routes
const  User = require('../models/users');

async function logMeIn(req, res){
    const theUser = await User.getByUsername("AshTheVeryBest");
    // const theUser = await User.checkPassword("AshTheVeryBest");
    res.render('login', {
        locals:{
            username: '',
            password: ''
    },
        partials:{
            bootstrap: './partial-settings'
        }});
}

async function getUserProfile(req, res){
    const theUser = await User.getByUsername(req.body.username);
    // console.log(req.body.username);
    // console.log(req.body.password);
    if(theUser) {
        if (theUser.checkPassword(req.body.password)) {
            // console.log(req.session);
            req.session.user = theUser.id;
            req.session.save(() => {
                res.redirect('/user');
            })
        } else {
            res.render('login', {
                locals:{
                    username: req.body.username,
                    password: ''
            },
                partials:{
                    bootstrap: './partial-settings'
                }});
        }
    } else {
        res.render('login', {
            locals:{
                username: '',
                password: ''
        },
            partials:{
                bootstrap: './partial-settings'
            }});
    }
}

module.exports = {
    logMeIn,
    getUserProfile
};
