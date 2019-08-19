
function Animal(){
    this.animal = "animal";
}

Animal.prototype.speak = function (){
    console.log(this.voice);
}

module.exports = Animal;