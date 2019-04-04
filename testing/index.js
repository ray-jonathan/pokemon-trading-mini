const pokemon = require('pokemontcgsdk')

pokemon.card.find('base1-1')
.then(result => {
    console.log(result.card.name) // "Charizard"
})