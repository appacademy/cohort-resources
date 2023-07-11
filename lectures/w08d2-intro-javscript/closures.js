const nominees = function(){
    const listOfNominees = ["the weekend"];

    return function(newNominee){
        listOfNominees.push(newNominee);
        return listOfNominees;
    }
}

// let one = nominees();
// console.log(one("bad bunny"))
console.log(nominees()("taylor swift"))

const counter = ()=>{
    let currentCount = 0;
    return ()=> {
        currentCount += 1;
        return currentCount
    }
}


// console.log(counter()())


const singers = function(aristArray){

    return function(newArtist){
        aristArray.push(newArtist);
        return aristArray
    }
}

// console.log(singers(["bazzi"])("drake"))






const counter2 = () => {
    let count = 0;
    return {
        inc: () => count += 1,
        dec: () => count -= 1,
        reset: () => count = 0
    }
}


console.log(counter2().inc())
