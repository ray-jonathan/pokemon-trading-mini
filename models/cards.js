const db = require('./conn');

class Card {
    constructor(id, name, picture, rarity) {
        this.id = id,
        this.name = name,
        this.picture = picture,
        this.rarity = rarity
    };

    static add(cardData) {
        return db.any(`insert into cards
            (name, picture, rarity)
        values
            ($1, $2, $3)
            `, [cardData.name, cardData.picture, cardData.rarity])
    };

    static getByName(name) {
        return db.one(`select * from cards where name=$1`, [name])
            .then(cardData => {
                const aCard = new Card(
                    cardData.id,
                    cardData.name,
                    cardData.picture,
                    cardData.rarity);
                return aCard;
            })
    };


};

module.exports = Card