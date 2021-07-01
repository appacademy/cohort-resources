const walker = {
  name: "Walker",
  numTats: 7,
  yell: function (arg) {
    console.log(`${arg} matey!`);
  },
  readStats: function () {
    console.log("name: ", this.name);
    console.log("numTats: ", this.numTats);
  },
  catchPhrases: function (arg1, arg2) {
    // this one doesnt actually use this
    // still works
    console.log(`${this.name}'s catch phrases: ${arg1}, ${arg2}`)
  }
}

const mike = {
  name: "Mike",
  numTats: 99
}