// functions for res.render-ing user info from routes
function getUserProfile(req, res){
    res.render('user', {locals:{
        username:"dummy Name",
        password:"lol, not really"
    }});
}

module.exports = {
    getUserProfile
}