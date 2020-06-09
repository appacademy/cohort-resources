console.log("Lions and Tigers and Bears??")

const pikachu = {
  firstName: 'Pika',
  lastName: 'Chu',
  getPokeName: function () {
    const fullName = `${this.firstName} ${this.lastName}`
    return fullName;
  }
};

const pokemonIntro = function (snack, hobby) {
  console.log(`${this.getPokeName()} loves ${snack} and ${hobby}`);
};

// pokemonIntro();
// pokemonIntro.apply(pikachu, ['sushi', 'algorithms']);

// pokemonIntro.call(pikachu, 'pretzels', 'snowboarding');


const pikaIntro = pokemonIntro.bind(pikachu);

pikaIntro('sardines', 'woodshop');

