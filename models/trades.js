const db = require('./conn');

class Trade {
    constructor(id, old_user_id, new_user_id, card_id) {
        this.id =id,
        this.oldUserId = old_user_id,
        this.newUserId = new_user_id,
        this.cardId = card_id;
    };

    save(id) {
        return db.result(`
        update trades set
            old_user_id=${this.oldUserId},
            new_user_id=${this.newUserId},
            card_id=${this.cardId}
        where id=${this.id}
        `);
    };


};

module.exports = Trade;