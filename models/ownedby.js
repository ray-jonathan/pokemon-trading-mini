const db = require('./conn');

class OwnedBy {
    constructor(id, user_id, card_id) {
        this.id = id;
        this.userId = user_id;
        this.cardId = card_id;
    }

    static add(ownedData) {
        return db.one(`insert into ownedBy
            (user_id, card_id)
        values
            ($1, $2)
            `, [ownedData.user_id, ownedData.card_id])
    };

    save(id) {
        return db.result(`
        update ownedBy set
            user_id = ${this.userId},
            card_id = ${this.cardId}
        where id=${this.id}
        `);
    }

    static getUserCards(user_id){
        return db.any(`select * from ownedby where user_id=$1`, [user_id]);
    }

    static deleteCardFromUser(ownedById){
        return db.result(`delete from ownedby where id=$1 returning true`, [ownedById]);
    }

    static addCardToUser(card_id, user_id){
        return db.one(`insert into ownedby (card_id, user_id) values ($1, $2)`, [card_id, user_id]);
    }
}

module.exports = OwnedBy;