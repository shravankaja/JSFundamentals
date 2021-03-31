
let nameq = {
    a: "Shravan"
}

let desc = function () {
    console.log(this.a + "  is a good boy")
}

console.log(desc.call(nameq))  /* we are calling a method desc to use our object property and perform
respective actions use my object properties. Using call we can borrow mehtods from other sources and 
perfrom  operation using our object properties. Example we can borrow  method   -
[].lenght.call(arguments) */



let findLenght = function () {
    console.log([].slice.call(arguments));  // here we have borrowed arraymethod to convert our simple arguments to array
}

findLenght(1, 2, 3);


//--------------------------------------------------------------------------------------------------------------------

let feetToInch = {
    inchToFeet: 0.56,
    FeetToInch: 0.84,
}

let arr = [1, 2, 3];


let convertUnits = function (a, b, c) {
    console.log("Inch to Feet :" + this.inchToFeet * a);
    console.log("Inch to Feet :" + this.inchToFeet * b);
    console.log("Inch to Feet :" + this.inchToFeet * c);
}

console.log(convertUnits.apply(feetToInch, arr));
console.log(Math.min.apply(null, arr)); // we are apply a method from math class


/* in apply we can pass array */

//-------------------------------------------------------------------------------------------------

let person = {
    legs: 2,
    hands: 2
}

let aboutPerson = function (e) {
    console.log("legs : " + this.legs + " hands : " + this.hands + " name is :" + e)
}
let describePerson = aboutPerson.bind(person);
describePerson("Shravan");
describePerson("kate");

/* here we bind object to method so make it resuable */