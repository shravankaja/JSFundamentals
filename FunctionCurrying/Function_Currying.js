let avg = function (...n) {
    let total = 0;
    for (let i = 0; i < n.length; i++) {
        total += n[i];
    }
    return total / n.length;
}

var anotherFunction = function (fn, ...n) {
    return function (...m) {
        return fn.apply(this, n.concat(m));
    }
}

var result = anotherFunction(avg, 1, 3, 4, 5,7);
console.log(result(1, 3, 4))

/* In the above example we have passed a avg function as parameter and used
nested functions using closure princepal. Results in currying */

let mainFunction = function(a) {
    return  function(b) {
        return function(c) {
            console.log(a+" is saying "+b+" to"+c)
        }
    }
}

mainFunction("Shravan")("Hi")("Everyone")