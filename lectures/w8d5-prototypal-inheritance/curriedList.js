function boringList(...items){
  console.log("Here is your list!");
  console.log(items);
}

function curriedList(startingItem){
  const list = [startingItem];

  return function _curryItem(item) {
    if (item === "end"){
      console.log("Here is your list!");
      console.log(list);
    } else {
      list.push(item);
      return _curryItem;
    }
  }
}