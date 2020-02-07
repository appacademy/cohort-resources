const pikachu = {
    firstName: 'pika',
    lastName: 'chu',
    getPokeName: function() {
        const fullName = `${this.firstName}${this.lastName}`;
        return fullName;
    }
};

// defined on global scope
const pokeIntro = function(snack, hobby) {
    console.log(`${this.getPokeName()} loves ${snack} and ${hobby}!!!`);
}

// Bind stuff
const pikaIntro = pokeIntro.bind(pikachu);

