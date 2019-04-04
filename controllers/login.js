

// functions for res.render-ing user info from routes
const  User = require('../models/users');

async function logMeIn(req, res){
    const theUser = await User.getByUsername("AshTheVeryBest");
    // const theUser = await User.checkPassword("AshTheVeryBest");
    res.render('login', {
        locals:{
            username: theUser.username,
            password: theUser.password
    },
        partials:{
            bootstrap: './partial-settings'
        }});
}

async function getUserProfile(req, res){
    const theUser = await User.getByUsername("AshTheVeryBest");
    res.render('user', {
        locals:{
            username: theUser.username,
            password: theUser.password
    },
        partials:{
            bootstrap: './partial-settings'
        }});
}

module.exports = {
    logMeIn,
    getUserProfile
};