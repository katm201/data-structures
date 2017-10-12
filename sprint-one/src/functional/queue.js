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
    if (_min === 0) {
      _min++;
    }

    _size++;
    _max++;
    storage[_max] = value;
  };

  someInstance.dequeue = function() {
    if (_size > 0) { 
      
      let oldestValue = storage[_min];
      if (oldestValue === undefined) {
        debugger;
      }
      _min++;
      _size--;
      return oldestValue;
    }
  };

  someInstance.size = function() {
    return _size;
  };

  return someInstance;
};
