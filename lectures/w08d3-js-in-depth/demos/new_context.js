class Singer{
    constructor(name){
        this.name = name
        // this.greet = this.greet.bind(this)
    }
    greet(){
        console.log(this, `hello my name is ${this.name}`)
    }

    brag(){
        setTimeout(function() {
            console.log(` and I have a lot of grammys`)
        }, 3000);
        
    }
}

taylor = new Singer("taylor swift");
setTimeout(taylor.greet, 1000)
// taylor.brag();