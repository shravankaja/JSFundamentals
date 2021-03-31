

console.log(a); // here we get undefine instead of error because var a was 
// hoisted and program knows that there is a variable a but 
// with no value output will be "Undefined"

var a = "Hi";


console.log(a);  // out put will be "Hi"

example();   // now our function is hoisted

function example() {
    let a = 10;
    console.log(a);
}

 console.log(b()) // this will error as anonymous unctions are not 
                  // hoisted 

var b=function() {
    let c=10;
    console.log(c)
    return b;
}


