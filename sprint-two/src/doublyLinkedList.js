var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var newNode = Node(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    let oldTail = this.tail;
    this.tail = newNode;
    oldTail.next = newNode;
    this.tail.previous = oldTail;
  }
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var newNode = Node(value);
  if (this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    oldHead.previous = this.head;
  }
};

DoublyLinkedList.prototype.removeTail = function() {
  if (this.head === this.tail) {
    let nodeValue = this.head.value;
    this.head = null;
    this.tail = null;
    return nodeValue;
  }
  if (this.tail) {
    let oldTail = this.tail;
    this.tail = oldTail.previous;
    this.tail.next = null;
    oldTail.previous = null;
    return oldTail.value;
  }
};

DoublyLinkedList.prototype.removeHead = function() {
  if (this.head === this.tail) {
    let nodeValue = this.head.value;
    this.head = null;
    this.tail = null;
    return nodeValue;
  }
  if (this.head) {
    let oldHead = this.head;
    this.head = oldHead.next;
    this.head.previous = null;
    oldHead.next = null;
    return oldHead.value;
  }
};

DoublyLinkedList.prototype.contains = function(target) {

};


