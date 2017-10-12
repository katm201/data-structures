

// Instantiate a new graph
var Graph = function() {
  //create a storage object
    //each new node's value is the key
    //an array of it's 'edges' is the value;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //putting a new key/value pair on the storage object
    //key: node value
    //value: [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //loop over the keys in the storage object to see if any keys match the target node
    // if so, return true
  //otherwise return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if the toNode is on the fromNode's array
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //find the fromNode key on storage
    //add the toNode value to the array
  //find the toNode key on storage
    //add the fromNode value to the array
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //go through the edges array of fromNode and splice out the toNode value
  //go through the edges array of the toNode and splice out the fromNode Value

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


