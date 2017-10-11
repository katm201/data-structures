var Stack = function() { 
  Stack.prototype = stackMethods;
  var instance = Object.create(Stack.prototype);
  instance._size = 0;
  instance._storage = {};
  return instance;
};

var stackMethods = {

  
  //push
    //increase the size
    //add the value to the object based on size for the key

  //pop
    //check to see if size is greater than 0
      //if it is create a local variable
      //decrease the size
      //return the local variable

  size: function() {
    return this._size;
  }
};


