const pikachu = {
    firstName: "Pika",
    lastName: "Chu",
    getPokeName: function() {
        const fullName = `${this.firstName}${this.lastName}`;
        return fullName;
    }
};

const charmander = {
    firstName: 'Charm',
    lastName: 'Ander'
};


const pokemonIntro = function(snack, hobby) {
    console.log(`${this.getPokeName()} loves ${snack} and ${hobby}`)
};

// call and apply immediately invokes the function (have the option of taking arguments needed for function)

// bind is returning a bound version of the function we can invoke later

const pikaIntro = pokemonIntro.bind(pikachu); //pikaIntro is the pokemonIntro function with the pikachu object bound to it