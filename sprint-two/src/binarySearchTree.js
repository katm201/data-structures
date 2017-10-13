var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.prototype);
  
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  return newBST;
};

BinarySearchTree.prototype.insert = function(newValue, node) {
  node = node || this;
  if (newValue < node.value) {
    if (node.left) {
      node = node.left; 
    } else {
      node.left = BinarySearchTree(newValue);
      return;
    }
  } else {
    if (node.right) {
      node = node.right;
    } else {
      node.right = BinarySearchTree(newValue);
      return;
    }
  }
  this.insert(newValue, node);
};

BinarySearchTree.prototype.contains = function(target) {
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //accepts a callback and executes it on every value contained in the tree
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
