const db = require('./conn');

class User {
    constructor(id, username, password) {
        this.username = username;
        this.password = password
    };

    static add(userData) {
        return db.one(`insert into users
            (username, password)
        values
            ($1, $2)
            `, [username, password])
    };


    static delete(id) {
        return db.result('delete from users where id=$1', [id]);
    };

    save() {
        return db.result(`
        update users set
            username='${this.username}',
            password='${this.password}'
        where id=${this.id}
        `)
    };

    static getByEmail(email) {
        return db.one(`select * from users where email=$1`, [email])
            .then(userData => {
                const aUser = new User(
                    userData.id,
                    userData.username,
                    uerData.password);
                return aUser;
            })
    };

};
