const feed = function() {
    const foods = ['bananas']; // the variable we are closing over

    return function(foodItem) {
        foods.push(foodItem);
        return `I have eaten ${foods.join(' and ')}.`;
    }
}

let closure = feed('oranges'); // closure is the inner function of feed

console.log(closure('oranges'));

// closure('kiwis');

