const walker = {
  name: "Walker",
  numTats: 9,

  yell: function (arg) {
    console.log(`${arg} matey!`);
  },

  readStats: function () {
    console.log("name: ", this.name);
    console.log("numTats: ", this.numTats);
  },
  
  catchPhrases: function (arg1, arg2) {
    console.log(this);
    console.log(`${arg1}, ${arg2}`)
  },

  tester: function () {
    console.log(this);

    function newFunc() {
      console.log(this);
    }

    newFunc();
  }
};

const mike = {
  name: "Mike",
  numTats: 99
};

