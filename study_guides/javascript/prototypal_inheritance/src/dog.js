const Util = require("./util");
const Animal = require("./animal");

function Dog(){
    this.voice = "bark"
}

module.exports = Dog;
Util.inherits(Dog,Animal);