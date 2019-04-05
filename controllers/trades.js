const  Trade = require('../models/trades');
const  OwnedBy = require('../models/ownedby');

async function getTrade(req, res){
    const {pseudoID} = req.params;
    const {source} = req.params;
    const userID = req.session.user; // need value from sessions
    if (source === "user"){
        OwnedBy.deleteCardFromUser(pseudoID, userID)
        .catch(err=> {
            console.log(err);
        })
        .then(() => {res.redirect('/user');});
    }
    else if (source === "cards"){
        console.log(pseudoID);
        console.log(req.params);
        await OwnedBy.addCardToUser(pseudoID, userID)
        .then(() => {res.redirect('/cards');});
    }
}

module.exports = {
    getTrade
};