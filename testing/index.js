const pokemon = require('pokemontcgsdk');

// console.log("hello 1?");
pokemon.card.all({ setCode: 'base1', pageSize: 1 })
.on('data', card => {
    // console.log(card);
});
// console.log("hello 2?");



// pokemon.card.all({ set: 'base', name: 'charmander', pageSize: 1 })
// .on('data', card => {
//     console.log(card)
// })