// functions for res.render-ing user info from routes
const  User = require('../models/users');

async function getUserProfile(req, res){
    const theUser = await User.getByUsername("AshTheVeryBest");
    res.render('user', {
        locals:{
            username: theUser.username,
            password: theUser.password
    },
        partials:{
            settings: './partial-settings'
        }});
}

module.exports = {
    getUserProfile
}