let arr = ['1','2','3']

arr.pop(); // removes last element 

arr.push('3'); // push element at the end of the array 

arr.shift(); // removes the first element and shifts all other elements to lewr index

arr.unshift('0'); // add elements to the start of the array 

arr.splice(2,0,'4','5'); // first parameter deines position where new elements to be addes,
                        // second element how many have to be deleted , rest are elements to be addedd

arr.splice(2,1,'7');

let arrTwo = arr.slice(3,5); // we get a new array from the starting position given 

console.log(arrTwo.concat(arr)) // merges two arrays 


var arrThree = arrTwo.concat(arr); 

console.log(arrThree.sort());

console.log(arrThree.sort(function(a, b){return a - b})); // we can define our own custom sort fnction

arrThree.forEach(number => { console.log(number*2);})

var arrEven = arrThree.filter(number => { if (number %2 ==0) return number;})

console.log(arrEven)

console.log(arrTwo)
console.log(arr)