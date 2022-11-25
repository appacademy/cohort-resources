// defined on the Function class and returns another function

Function.prototype.myBind = function(context, ...bindArgs) {
    let that = this; // context = specific function
    return function(...callArgs) {
        that.apply(context,[...bindArgs, ...callArgs]);
    }
}

let fn = function(...people) {
    people.forEach(person => {
        console.log(`${this.name} says hi to ${person}`)
    })
}

let subject = {
    name: 'ricardo'
}

let boundFn = fn.myBind(subject, 'tom', 'billy', 'joel');
// console.log(fn === boundFn);
boundFn('harry', 'sally', 'bob');