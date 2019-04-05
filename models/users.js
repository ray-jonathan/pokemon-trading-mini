const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password
    };

    static add(userData) {
        return db.one(`insert into users
            (username, password)
        values
            ($1, $2)
            `, [userData.username, userData.password])
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

    // static getByEmail(email) {
    //     return db.one(`select * from users where email=$1`, [email])
    //         .then(userData => {
    //             const aUser = new User(
    //                 userData.id,
    //                 userData.username,
    //                 uerData.password);
    //             return aUser;
    //         })
    // };

    static getByUsername(username) {
        return db.one(`select * from users where username=$1`, [username])
            .then(userData => {
                const aUser = new User(
                    userData.id,
                    userData.username,
                    userData.password);
                return aUser;
            })
            .catch(
                () => {
                    return null;
                }
            )
    };

    static getById(id) {
        return db.one(`select * from users where id=$1`, [id])
            .then(userData => {
                const aUser = new User(
                    userData.id,
                    userData.username,
                    userData.password);
                return aUser;
            })
            .catch(
                () => {
                    return null;
                }
            )
    };

    setPassword(newPassword) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    };

    checkPassword(aPassword) {
        return bcrypt.compareSync(aPassword, this.password);
    };

};


module.exports = User