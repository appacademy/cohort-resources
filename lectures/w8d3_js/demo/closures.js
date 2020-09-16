/* Closures */

function appleTree(){
  let aVariables = "apple";
  function tree(){
    return aVariables;
  }
  return tree()

}



function appleTree2(){
  let tree = {
    type:"apple", grown: false
  };

  function growTree(){
    tree.grown = true;
  }
  growTree();
  return tree;
}


const feed = function() {
  const foodItems = ['Grits'];

  // function innerFeed(newItem) {
  //   foodItems.push(newItem);
  //   return `I have eaten ${foodItems.join(' and ')}`;
  // }

  return function(newItem) {
    foodItems.push(newItem);
    return `I have eaten ${foodItems.join(' and ')}`;
  }
  // return innerFeed('chocolate');
}

//feed() => returns a function




































































