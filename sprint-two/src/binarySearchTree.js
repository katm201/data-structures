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

BinarySearchTree.prototype.contains = function(target, node) {
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree
  node = node || this;
  //if target === node.value
    //return true;
  if (target === node.value) {
    return true;
  } else if (target < node.value) {
    if (node.left) {
      node = node.left; 
    } else {
      return false;
    }
  } else {
    if (node.right) {
      node = node.right;
    } else {
      return false;
    }
  }
  return this.contains(target, node);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //accepts a callback and executes it on every value contained in the tree
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
