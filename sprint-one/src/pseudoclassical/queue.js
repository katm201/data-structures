var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
  this._min = 0;
  this._max = 0;
  this._storage = {};
};


Queue.prototype.enqueue = function(value) {
  if (this._min === 0) {
    this._min++;
  }

  this._size++;
  this._max++;
  this._storage[this._max] = value;
};

Queue.prototype.dequeue = function(value) {};

Queue.prototype.size = function(value) {
  return this._size;
};
