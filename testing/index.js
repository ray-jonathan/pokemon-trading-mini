const pokemon = require('pokemontcgsdk')

pokemon.card.find('base1-2')
.then(result => {
    console.log(result.card.name) // "Charizard"
})