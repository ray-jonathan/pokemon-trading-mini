const  Trade = require('../models/trades');

async function getTrade(req, res){
    const {id} = req.params;
    console.log(id);
    res.json({message:`${id}`});

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