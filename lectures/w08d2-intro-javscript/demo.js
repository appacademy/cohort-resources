function century(array){
    let centuryArray = [];
    let hash = {} ;
    array.forEach((el)=>{
        centuryArray.push(el * 100);
    });
    return centuryArray;
 }

// camelCase 
// thisIsCamelCase 
// this first word loser case 
// then every words after is capitilized


// no negative indexing!!
// getting the last element of array
const array = [1,2,3,4,5,6,7,8];
array[array.length -  1]
// null,
// undefined 




// mulitple ways to delcare variables
// they all work differently
// 1. let => let centuryArray = []
// 2. const => const centuryArray = []
// 3. var => var centuryArray = []
// 4. global => centuryArray = []


// /   if in javascript 
if(something === something){
    // do logic
} else if (somethingDifferent === somethingElse){
    // do this instead 
} else {
    // do this
}

// while in javascript

while (something === something){
    // do stuff 
}

// for loop

for(let i = 0; i < array.length; i++ ){
    // we do logic!!!!!!
}

// forEach in javascript 
array.forEach((ele)=>{
    if(ele === 3){
        // no return!!!
        // this is a no no
        // forEach cannot return 
    }
})

// const array = [1,2,3];
let flag = false;

// ***in*** does indexes, and **of*** is values/ elements
for(let num in array){
    console.log(num);
    // if(num === 2) {
    //     flag = true;
    //     console.log(flag);
    // } 
    

}

// interpolate 
let value = "diego"
`hello ${diego}`


// interpolate key in object with JS
function something(value){
    const hash = {}
    
    return  {[value]: value}
}

console.log(something("hello"))

