var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance = _.extend(instance, queueMethods);

  instance._storage = {};

  instance._size = 0;
  instance._min = 0;
  instance._max = 0;
  return instance;
};

var queueMethods = {
  //enqueue
  //dequeue
  size: function() {
    debugger;
    return this._size;
  }
};


