const grammyNom = function(arrayOfNominees){
    // let arrayOfNominees = ["drake", "bad bunny", "beyonce", "taylor swift"]
    return function addMoreArtists(artist){
        arrayOfNominees.push(artist)

        return arrayOfNominees;
    }
}


let nomsArray = ["drake", "bad bunny", "beyonce", "taylor swift"];
// double bubble
grammyNom(nomsArray)("adele");


// variable way
const outerFunc = grammyNom(nomsArray);
outerFunc("adele");

