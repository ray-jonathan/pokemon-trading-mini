// functions for res.render-ing user info from routes
const  User = require('../models/users');
const  Card = require('../models/cards');
const  OwnedBy = require('../models/ownedby');

async function getUserProfile(req, res){
    const theUser = await User.getById(req.session.user);
    const userOwnedCards = await OwnedBy.getUserCards(theUser.id);
    const allTheirCards = [];
    await Promise.all(userOwnedCards.map(async (cardInHand) => {
        const cardInfo = await Card.getById(cardInHand.card_id);
        allTheirCards.push(cardInfo);
    }));    

    res.render('user', {
        locals:{
            username: theUser.username,
            password: theUser.password,
            Card: allTheirCards
    },
        partials:{
            bootstrap: './partial-settings',
            cardPartial: 'partial-cards'
        }});
}





module.exports = {
    getUserProfile
}