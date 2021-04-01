const { concatSeries } = require("async");

class Node {
    constructor(data) {
        this.data=data;
        this.next= null
    }

     getData() {
        return this.data;
    }
    
    setData() {
        this.data=data;
    }

    setNext(node) {
        this.next=node;
    }

    getNext(node) {
        return this.next;
    }

}

class LinkedList {
    constructor() {
        this.head=null;
        this.tail=null;
    }

}

module.exports=LinkedList;




LinkedList.prototype.add = function (node) {
    if(this.head==null)  this.head=node;
    if(this.tail==null) this.tail=node;

    else {
        this.tail.setNext(node);
        this.tail=node;
    }
}

LinkedList.prototype.printHead = function() {

    return this.head.data;
   
}

LinkedList.prototype.printTail = function() {
    return this.tail.data;
}

let node1 = new Node(6);
let node2 = new Node(3);
let node3 = new Node(4);

let l = new LinkedList();

l.add(node1)
l.add(node2)
l.add(node3)

console.log(l.printTail())