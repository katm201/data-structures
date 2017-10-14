var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      let oldTail = list.tail;
      list.tail = newNode;
      oldTail.next = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      let oldHead = list.head;
      list.head = oldHead.next;
      oldHead.next = null;
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null; //note: for doublyLinkedLists only!

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
