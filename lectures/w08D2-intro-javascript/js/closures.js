// closures 
// a closure is a function AND the connection to variables at their birth place 


const grammyNominees = function(listOfNominees){
    // const listOfNominees = ["drake", "bad bunny", "beyonce", "taylor swift"];


    return function addMoreArtists(artist){
        listOfNominees.push(artist);

        
        // this is a closure

        return `here are the nominees ${listOfNominees.join(", ")}`
    }
}


let outerFunc = grammyNominees(["drake", "bad bunny", "beyonce", "taylor swift"])

console.log(outerFunc("adele"))


// double bouble
// grammyNominees()("adele")