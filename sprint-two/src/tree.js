var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 

  newTree = _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  var node = this;
  if (node.value === target) {
    return true;
  } 

  for (var i = 0; i < node.children.length; i++) {
    result = node.children[i].contains(target);
    if (result) {
      return result;
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
