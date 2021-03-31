/* prototype chain will result in inheritance.
So like we can use protypes which work similar to classes while 
extending the classes. By default all the elements in the js file are given object 
prototype , by traversing till the end of the chain */

let person = function (nm, id) {  // this function replicates constructor functionality 
    this.nm = nm;
    this.id = id;
}

person.prototype.getDetails = function () {  // this function acts as a object method
    return "name is " + this.nm + " id is " + this.id;
}

let shravan = new person("Shravan", 123);
console.log(shravan.getDetails())


let employee = function (nm, id, salary) {  // we are creating a new object like extending person class to employee class
    person.call(this, nm, id);
    this.salary = salary;
}

Object.setPrototypeOf(employee, person.prototype)   // this statement extendds employee to person
employee.prototype.employeeInfo = function () {
    return "name is " + this.nm + " id is " + this.id + " salary is " + this.salary;        
}

let david = new employee("david", 644, 55000)
console.log(david.employeeInfo())