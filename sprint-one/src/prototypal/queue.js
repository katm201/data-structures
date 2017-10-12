var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods);
  instance._storage = {};
  instance._size = 0;
  instance._max = 0;
  instance._min = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    if (this._min === 0) {
      this._min++;
    }
    
    this._size++;
    this._max++;
    this._storage[this._max] = value;
  },

  dequeue: function() {
    if (this._size > 0) {
      let oldestValue = this._storage[this._min];
      this._min++;
      this._size--;
      return oldestValue;
    }
  },

  size: function() {
    return this._size;
  }
};


