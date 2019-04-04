const allCards = require('./base.json');
const Card = require('./models/cards');

allCards.cards.forEach ((oneCard) => {
    oneCard.picture = oneCard.imageUrlHiRes;
    Card.add(oneCard);
})

