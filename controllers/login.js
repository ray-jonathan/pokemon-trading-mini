

// functions for res.render-ing user info from routes
const  User = require('../models/users');
const escapeHtml = require('../utils');


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
        if (theUser.checkPassword(escapeHtml(req.body.password))) {
            req.session.user = theUser.id;
            req.session.username = theUser.username;
            console.log(req.session);
            req.session.save(() => {
                res.redirect('/user');
            })
        } else {
            res.render('login', {
                locals:{
                    username: escapeHtml(req.body.username),
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
