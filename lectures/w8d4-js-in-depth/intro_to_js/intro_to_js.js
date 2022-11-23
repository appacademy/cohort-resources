Array.prototype.myEach(someFunction) {
  for (let i = 0; i < this.length; i++) {
    someFunction(this[i])
  }
}

[1, 2, 3].myEach(function(ele) {
  console.log(`the square of ${ele} is ${ele * ele}`)
})

Array.prototype.myMap(theMyMapFunction) {
  let mappedArray = []

  // OPTION 1 defining the function directly in the invocation of myEach
  this.myEach(function(ele) {
    mappedArray.push( theMyMapFunction(ele) )
  });

  // OPTION 2 define the function separately, and just pass it in as an argument
  const theMyEachFunction = function(ele) {
    mappedArray.push( theMyMapFunction(ele) )
  }

  this.myEach(theMyEachFunction);

  // OPTION 3 using fat arrow ES6 syntax
  this.myEach((ele) => {
    mappedArray.push(theMyMapFunction(ele))
  })
  return mappedArray
}

[1, 2, 3].myMap(function(ele) {
  ele * ele
})