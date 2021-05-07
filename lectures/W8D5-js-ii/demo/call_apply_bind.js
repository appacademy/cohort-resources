const erik = {
  name: "Erik",
  numTats: 9,
  yell: function (arg) {
    console.log(`${arg} matey!`);
  },
  readStats: function () {
    console.log("name: ", this.name);
    console.log("numTats: ", this.numTats);
    console.dir(this);
  },
  catchPhrases: function (arg1, arg2) {
    console.log(`${arg1}, ${arg2}`)
  }
};

const mike = {
  name: "Mike",
  numTats: 99
};

