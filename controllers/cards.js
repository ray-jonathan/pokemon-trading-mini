// functions for res.render-ing user info from routes
const  Card = require('../models/cards');

async function getCards(req, res){

    const allTheCards = await Card.getAllCards();
    // console.log(allTheCards);
    res.render('cards', {
        locals:{
            username: "ash",
            password: "pikachu",
            Card: allTheCards
    },
        partials:{
            bootstrap: './partial-settings',
            cardPartial: 'partial-cards'
        }});
}

module.exports = {
    getCards
};