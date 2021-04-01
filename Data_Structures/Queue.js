 function Queue() {
     this.elements = []
 }

 Queue.prototype.enqueuq = function(e) {
     this.elements.push(e);
 }

 Queue.prototype.dequeue = function() {
     return this.elements.shift();
 }

 Queue.prototype.isEmpty = function() {
     return this.elements=0
 }

 Queue.prototype.peek = function() {
     return this.elements[0]
}

Queue.prototype.lenght = function() {
    return this.elements.length;
}

let q = new Queue();

for(let i=1;i<7;i++) {
    q.enqueuq(i)
}
console.log(q.lenght())
q.dequeue()
console.log(q.lenght())
console.log(q.peek())

