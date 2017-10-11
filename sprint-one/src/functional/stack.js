var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //increase the size
    _size++;
    //store the value at storage with the size as the key
    _storage[_size] = value;

  };

  someInstance.pop = function() {
    //check the size
    //if greater than one then
      //create a local variable to store the value popping off
      //reduce size by one
      //return local variable

  };

  someInstance.size = function() {
   return _size;
  };

  return someInstance;
};
