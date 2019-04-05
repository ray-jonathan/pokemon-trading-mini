// functions for res.render-ing user info from routes
const  Card = require('../models/cards');

async function getCards(req, res){
    const allTheCards = await Card.getAllCards();
    // console.log(allTheCards);
    res.render('cards', {
        locals:{
            username: req.session.username,
            password: "",
            Card: allTheCards
    },
        partials:{
            bootstrap: './partial-settings',
            cardPartial: 'partial-cards',
            navPartial: './partial-nav'
        }});
}

module.exports = {
    getCards
};