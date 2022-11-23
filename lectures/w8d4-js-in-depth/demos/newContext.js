class Singer{
    constructor(name){
        this.name = name
        this.greet = this.greet.bind(this)
    }
    greet(){
        console.log(`hello my name is ${this.name}`)
    }

    brag(){
        setInterval(function() {
            console.log(this,` and I have a lot of grammys`)
        }, 300);
        
    }
}

taylor = new Singer("taylor swift");
taylor.brag()