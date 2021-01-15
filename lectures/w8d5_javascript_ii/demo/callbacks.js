class Pirate{
    constructor(name, numTats){
        this.name = name;
        this.numTats = numTats;
    }

    yell(arg){
        console.log(`${arg} matey!`)
    }
    
    static revolt(){
        // console.log(this)
        console.log("I am revolting!")
    }

    _yarr(){
        console.log("yarrrrrrr")
    }

    chant(){
        // setInterval 1st arg is a callback
        // 2nd arg is a time period in ms
        // setInterval(this._yarr, 1000)
        setTimeout(this._yarr, 5000)
    }
}

const ryan = new Pirate("Ryan", 9);
ryan.chant()