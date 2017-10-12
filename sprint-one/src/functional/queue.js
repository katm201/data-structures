var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
    //create minimum value = 0
    //create max value = 0
  var _size = 0;
  var _min = 0;
  var _max = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (_size === 0) {
      _min++;
    }

    _size++;
    _max++;
    storage[_max] = value;
  };

  someInstance.dequeue = function() {
    //check to see if size if greater than 0
      //store value of removed value in local variable
      //increase minimum
      //decrease size
      //return local value
    
  };

  someInstance.size = function() {
    return _size;

  };

  return someInstance;
};
