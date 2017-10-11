var Stack = function() { 
  var instance = Object.create(stackMethods);
  instance._size = 0;
  instance._storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this._size++;
    this._storage[this._size] = value;
  },
  
  pop: function() {
    if (this._size > 0) {
      let lastValue = this._storage[this._size];
      this._size--;
      return lastValue;
    }
  },

  size: function() {
    return this._size;
  }
};


