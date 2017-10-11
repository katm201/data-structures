var Stack = function() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype = {
  //push
  push: function(value) {
    this._size++;
    this._storage[this._size] = value;
  },

  //pop

  size: function() {
    return this._size;
  }
};

