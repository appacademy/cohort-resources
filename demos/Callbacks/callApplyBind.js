const pokemon = {
    firstname: "Píka",
    lastname: "Chu",
    getPokeName: function(){
        const fullname = `${this.firstname} ${this.lastname}`;
        return fullname;
    }
}

const pokemonIntro = function( snack, hobby ) {
    console.log( `${this.getPokeName()} loves ${snack} and ${hobby}` );
}

const logPokemon = pokemonIntro.bind(pokemon);
// bind permanently binds a particular context
logPokemon("sushi", "algorithms");
logPokemon("sushi", "algorithms");
logPokemon("sushi", "algorithms");

// 'pokemon' is the 'this' AKA the context
// pokemonIntro.call( pokemon, "sushi", "algorithms");    
// pokemonIntro.apply( pokemon, [ "sushi", "algorithms" ]);    