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
        .then(()=>{res.json({
            message:`Card ID: ${pseudoID}`,
            message2:`Referring Page: ${source}`
        });});

    }
    else if (source === "cards"){
        await OwnedBy.addCardToUser(pseudoID, userID);
        res.json({
            message:`Card ID: ${pseudoID}`,
            message2:`Referring Page: ${source}`
        });
    }
}

module.exports = {
    getTrade
};