require('dotenv').config();
const allCards = require('./base.json');
const Card = require('./models/cards');

allCards.cards.forEach ((oneCard) => {
    oneCard.picture = oneCard.imageUrlHiRes;
    Card.add(oneCard);
})

const User = require('./models/users');
const OwnedBy = require('./models/ownedby');

async function encryptSeed1() {
    const user = await User.getByUsername('AshTheVeryBest');
    user.setPassword('PikachuRox');
    await user.save();
    // console.log('you did the thing')
}
encryptSeed1();

async function encryptSeed2() {
    const user = await User.getByUsername('Mistywater99');
    user.setPassword('BlubBlubBlub');
    await user.save();
    // console.log('you did the thing')
}
encryptSeed2();

async function encryptSeed3() {
    const user = await User.getByUsername('BrockTheBoss');
    user.setPassword('R0ckS0lid');
    await user.save();
    // console.log('you did the thing')
}
encryptSeed3();

async function encryptSeed4() {
    const user = await User.getByUsername('Professor_oak');
    user.setPassword('Ch00seUrFate');
    await user.save();
    // console.log('you did the thing')
}
encryptSeed4();


// async function addCard() {
//     await OwnedBy.add(1, 1);
// }
// addCard();