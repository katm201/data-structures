var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods);
  instance._size = 0;
  instance._max = 0;
  instance._min = 0;
  return instance;
};

var queueMethods = {
  //enqueue(value)
  //dequeue

  size: function() {
    return this._size;
  }
};


