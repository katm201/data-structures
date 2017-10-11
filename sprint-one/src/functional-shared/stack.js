var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {}; 

  instance._storage = {};
  instance._size = 0;
  instance = _.extend(instance, stackMethods);

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


