let array = [1,2,3,4]

// array.forEach(function(ele){
//     ele * 2
// })


// const dummy = ()=>{}


function mathArray(array, func){
    let newArray = [];
    array.forEach((number) => {
        let callBackResult = func(number)
        newArray.push(callBackResult)
    });
    return newArray;
}


const doubler = number => number * 2;

const decade = number => number * 10;

const century = number => number * 100;



console.log(mathArray(array, century))