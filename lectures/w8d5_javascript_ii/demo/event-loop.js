function somethingSlow(){
    // some terribly slow implementation
    // assume that this function takes 4000 ms to return
}


function foo() {
    console.log("food")
}


function bar(){
    console.log("bark")
    baz()
}


function baz(){
    console.log("bazaar")
}

setTimeout(foo, 1500)
setTimeout(bar, 1000)
somethingSlow()