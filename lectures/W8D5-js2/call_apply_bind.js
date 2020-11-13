//? Call, Apply, Bind, oh my!

const ryan = {
  name: "Ryan",
  numTats: 9,
  yell: function (arg) {
    console.log(`${arg} matey!`);
  },
  readStats: function () {
    console.log("name: ", this.name);
    console.log("numTats: ", this.numTats);
  },
  catchPhrases: function (arg1, arg2) {
    console.log(`${this.name} says ${arg1}, ${arg2}`)
  }
}

const jen = {
  name: "Jen",
  numTats: 99
}

// ryan.readStats();
// ryan.readStats.call(jen);
// ryan.readStats.apply(jen);

// ryan.catchPhrases.call(jen, 'Yo ho ho!', 'Shiver me timbers');
// ryan.catchPhrases.apply(jen, ['Yo ho ho!', 'Walk the plank']);


const jensStats = ryan.readStats.bind(jen);
jensStats();

const jensPhrases = ryan.catchPhrases.bind(jen);
jensPhrases('it works!!', 'Totally');