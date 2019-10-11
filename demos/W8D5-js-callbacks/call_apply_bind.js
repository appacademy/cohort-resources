const pokemon = {
    firstName: 'Pika', 
    lastName: 'Chu', 
    getPokeName: function() {
        const fullName = `${this.firstName} ${this.lastName}`; 
        return fullName; 
    }
}; 

// what is `this`? this would be the window by default
const pokemonIntro = function(snack, hobby) {
    console.log(`${this.getPokeName()} loves ${snack} and ${hobby}`); 
}

// const logPokemon = function(snack, hobby) {
//     console.log(`PikaChu loves ${snack} and ${hobby}`); 
// }

// POJO = plain ole' Javascript Object
// we set the `this` to refer to the pokemon object defined above
// pokemonIntro.call(pokemon, 'sushi', 'algorithms'); 
// pokemonIntro.apply(pokemon, ['sushi', 'algorithms']); 

// we can use this pokemonIntro on many different pokemon objects! Squirtle, etc.
// pokemonIntro('sushi', 'algorithms'); 

// logPokemon is a function with `this` bound to the pokemon object
const logPokemon = pokemonIntro.bind(pokemon); 
console.log(logPokemon); 
logPokemon('sushi', 'algorithms'); 