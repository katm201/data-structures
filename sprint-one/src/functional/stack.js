var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    _size++;
    _storage[_size] = value;
  };

  someInstance.pop = function() {
    //check the size
    if (_size > 0) {
      let lastValue = _storage[_size];
      _size--;
      return lastValue;
    }
  };

  someInstance.size = function() {
    return _size;
  };

  return someInstance;
};
