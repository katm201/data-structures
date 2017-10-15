
var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  this._counter++;
  
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        var oldValue = bucket[i][1];
        bucket[i][1] = v;
        return oldValue;
      }
    }
  } else {
    bucket = [];
    this._storage.set(index, bucket);
  }
  bucket.push([k, v]);
};

HashTable.prototype.tableRebalancer = function(increaseOrDecrease) {
  
  if (increaseOrDecrease === 'increase') {
    var oldStorage = this._storage;
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
  }

  if (increaseOrDecrease === 'decrease') {
    debugger;
    var oldStorage = this._storage;
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
  }

  
  this._counter = 0;
  
  for (var key in oldStorage) {
    if (typeof oldStorage[key] !== 'function') {
      var bucket = oldStorage[key];
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          this.insert(bucket[i][0], bucket[i][1]);
        }
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        var oldValue = bucket[i][1];
        bucket.splice(i, 1);
        this._counter--;
        return oldValue;
      }
    }
  }
};

HashTable.prototype.helper = function(bucket, foundFn) {
  var result;
  for (var i = 0; i < bucket.length; i++) {
    var touple = bucket[i];
    if (touple[0] === k) {
      result = foundFn(touple);
    }
  }
  return result;
}

HashTable.prototype.bucketTraverse = function(k, func, v) {
  func = func || _.identity;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      func(k, bucket, i, v);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


