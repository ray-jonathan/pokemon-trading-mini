const  Trade = require('../models/trades');
const  OwnedBy = require('../models/ownedby');

async function getTrade(req, res){
    const {ownedById} = req.params;
    const {source} = req.params;
    const userID = 1; // need value from sessions
    // const userID = req.session.user; // need value from sessions
    ///// Traffic coming from their User Dashboard:
    // user wants to give up card
    // delete their "ownedby"
    // // set up a new transaction for the old=>new
    // for now, move on
    if (source === "user"){
        // // take card_ID, user_ID (from session)
        // await OwnedBy.deleteCardFromUser(cardID, userID);
        // // grab ownedby table
        // // update the ownedby table (db.one on the matching card_id, user_id)
        // // // update the trades table
        // res.json({
        //     message:`Card ID: ${cardID}`,
        //     message2:`Referring Page: ${source}`
        // });


        // take card_ID, user_ID (from session)
        OwnedBy.deleteCardFromUser(ownedById, userID)
        // grab ownedby table
        // update the ownedby table (db.one on the matching card_id, user_id)
        // // update the trades table
        .catch(err=> {
            console.log(err);
        })
        .then(()=>{res.json({
            message:`Card ID: ${ownedById}`,
            message2:`Referring Page: ${source}`
        });});

    }
    ///// Traffic coming from the Cards Page
    // user wants that card
    // add line to "ownedby"
    else if (source === "cards"){
        // update the trades table
        await OwnedBy.addCardToUser(cardID, userID);
        // update the ownedby table
        res.json({
            message:`Card ID: ${cardID}`,
            message2:`Referring Page: ${source}`
        });
    }



    // const allTheCards = await Card.getAllCards();
    // console.log(allTheCards);
    // res.render('cards', {
    //     locals:{
    //         username: "ash",
    //         password: "pikachu",
    //         Card: allTheCards
    // },
    //     partials:{
    //         bootstrap: './partial-settings'
    //     }});
}

module.exports = {
    getTrade
};