const db = require('./conn');

class Card {
    constructor(id, name, picture, rarity, ownedById = '') {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.rarity = rarity;
        this.ownedById = ownedById;
    }

    

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

    static getById(card_id, ownedBy_Id) {
        return db.one(`select * from cards where id=$1`, [card_id])
        .then(cardData => {
            this.ownedById = ownedBy_Id;
            const aCard = new Card(
                cardData.id,
                cardData.name,
                cardData.picture,
                cardData.rarity, 
                this.ownedById
                );
            return aCard;
        });
    }

    static getAllCards(){
        return db.any(`select * from cards`)
        .then(allCards => {
            let arrayOfCards =[];
            allCards.forEach(cardData => {
                const aCard = new Card(
                    cardData.id,
                    cardData.name,
                    cardData.picture,
                    cardData.rarity);
                arrayOfCards.push(aCard);
            });
            return arrayOfCards;
        });
    }


};

module.exports = Card