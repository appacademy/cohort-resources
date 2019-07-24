Array.prototype.myEach = function (callback) {
    let i = 0;

    while (i < this.length) {
        debugger
        callback(this[i])
        i++;
    }

}

Array.prototype.myReduce = function (callback, acc) {
    let i;

    if (acc === undefined) {
        acc = this[0]
        i = 1
    } else {
        i = 0
    }
    
    debugger
    this.slice(i, this.length).myEach(function (element) {
        debugger
        acc = callback(acc, element)
    })

    return acc

}

let sampleCallback = (acc,el) => {
    debugger
    return acc + el;
}

let arr = [1,2,3]

console.log(arr.myReduce(sampleCallback))

// console.log(arr.myReduce(sampleCallback,10))

