/* Closures */

function appleTree(){
  let aVariables = "apple";
  debugger
  function tree(){
    debugger
    return aVariables;
  }
  debugger
  let banana = "banana"
  return tree()

}

// console.log(appleTree())



function appleTree2(){
  let tree = {
    type:"apple", grown: false
  };
  debugger
  function growTree(){
    debugger
    tree.grown = true;
  }
  debugger
  growTree();
  return tree;
}
appleTree2()
// console.log(appleTree2())

const feed = function() {
  const foodItems = ['Grits'];
  // function innerFeed(newItem) {
  //   foodItems.push(newItem);
  //   return `I have eaten ${foodItems.join(' and ')}`;
  // }
  // debugger
  return function(newItem) {
    // debugger
    foodItems.push(newItem);
    return `I have eaten ${foodItems.join(' and ')}`;
  }
  // return innerFeed('chocolate');
}

// console.log(feed())
// func = feed()
// debugger
// console.log(func())



































































