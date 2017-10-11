var Stack = function() { 
  Stack.prototype = stackMethods;
  var instance = Object.create(Stack.prototype);
  instance._size = 0;
  instance._storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this._size++;
    this._storage[this._size] = value;
  },

  //pop
    //check to see if size is greater than 0
      //if it is create a local variable
      //decrease the size
      //return the local variable

  size: function() {
    return this._size;
  }
};


