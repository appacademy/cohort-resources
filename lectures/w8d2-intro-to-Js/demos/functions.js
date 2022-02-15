// Function Demo


/* Named functions */

// console.log(square(10))

function square(num){
    // debugger
    return num * num;
}

// console.log(square(10))


/* Function expresions */
const feedMe = function(food){
    // debugger
    // return "Thanks for the " + food + "!"
    return `Thanks for the ${food} !`;

}

// console.log(feedMe("pizza"));




/* Constructor Functions */

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    // this.isNew = function(){       // Too much repetitive code
    //     if(this.year === 2022){
    //         return true;
    //     }
    //     return false
    // }
    debugger
    console.log(this)
}

Car.prototype.isNew = function(){
    debugger
    if(this.year === 2022){
        return true;
    }
    return false;
}



/* IIFE functions */
// (function(){
//     console.log("pizza")
// }());


