let array = [1,2,3,4,5,6];

// callback is NOT a key word
function mathArray(array, func){
    let newArray = [];
    array.forEach((num)=>{
        let callBackResult = func(num); // kinda like proc.call(num)
        newArray.push(callBackResult);
    })
    return newArray;
}

const doubler = number => number * 2;

const decade = number => number * 10;

const century = number => number * 100;


// we dont invoke callbacks most of the time, if we do, then we are invoking it immediatley 
// mathArray(array,decade) vs mathArray(array,decade())

console.log(mathArray(array,decade))