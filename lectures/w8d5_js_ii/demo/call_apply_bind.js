const ryan = {
  name: "Ryan",
  numTats: 9,
  yell: function (arg) {
    console.log(`${arg} matey!`);
    console.log("name: ", this.name);
  },
  readStats: function () {
    console.log("name: ", this.name);
    console.log("numTats: ", this.numTats);
  },
  catchPhrases: function (arg1, arg2) {
    console.log(`${arg1}, ${arg2}`)
  }
}

const jen = {
  name: "Jen",
  numTats: 99,
}

jen.jenYell = ryan.yell.bind(jen)

// ryan.readStats()
// ryan.readStats.call(jen)

// borrowing yell method and calling on the jen object
// ryan.yell.call(jen,'heyoooo')

// ryan.yell.apply(jen,['hello'])

// ryan.catchPhrases.call(jen,'greetings','from earth')
// ryan.catchPhrases.apply(jen,['greetings','from earth'])

// bind returns bound function
// const jenYell = ryan.yell.bind(jen)
// 1. ryan pojo
// 2. ryan.yell gives us uninvoked function
// 3. call .bind on the function and give new context
// 4. gives us new function with jen as the context

// const jenYell = ryan.yell.bind(jen)('whatever')
