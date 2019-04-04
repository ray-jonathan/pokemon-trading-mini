const db = require('./conn');

class OwnedBy {
    constructor(id, user_id, card_id) {
        this.id = id;
        this.userId = user_id,
        this.cardId = card_id
    };

    save(id) {
        return db.result(`
        update ownedBy set
            user_id = ${this.userId},
            card_id = ${this.cardId}
        where id=${this.id}
        `);
    };


};

module.exports = OwnedBy;