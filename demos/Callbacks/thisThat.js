function Person(name) {
    var cheese = this;            // in the wild
    this.name = name;

    setTimeout( function(){
        // console.log(cheese);
        cheese.sayName();
        }, 5000 
    );
}

Person.prototype.sayName = function() {
    console.log(this.name);
}

const sally = new Person("Sally");  
