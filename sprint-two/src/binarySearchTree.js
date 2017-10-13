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
  node = node || this;
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

BinarySearchTree.prototype.depthFirstLog = function(callback, node) {
  node = node || this;
  callback(node.value);
  if (node.left) {
    this.depthFirstLog(callback, node.left);
  } 
  if (node.right) {
    this.depthFirstLog(callback, node.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
