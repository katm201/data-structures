
var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, rebalancerOK) {
  if (rebalancerOK === undefined) {
    rebalancerOK = true;
  }

  var result = this.retrieve(k, function(bucket, index, value) {
    bucket[index][1] = value;
    return bucket;
  }, v, function(bucket, key, value) {
    bucket = bucket || [];
    bucket.push([key, value]);
    return bucket;
  });

  this._counter++;

  if (rebalancerOK && (this._counter / this._limit > 0.75)) {
    this.tableRebalancer('increase');
  }

  return result;
};

HashTable.prototype.tableRebalancer = function(increaseOrDecrease) {
  this._counter = 0;

  if (increaseOrDecrease === 'increase') {
    this._limit = this._limit * 2;
  }

  if (increaseOrDecrease === 'decrease') {
    this._limit = this._limit / 2;
  }

  var oldLimitedArray = this._storage;
  this._storage = LimitedArray(this._limit);

  var table = this;

  oldLimitedArray.each(function(bucket, index, storage) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var key = bucket[i][0];
        var value = bucket[i][1];
        table.insert.call(table, key, value, false);
      }
    }
  });
};

HashTable.prototype.remove = function(k) {
  var result = this.retrieve(k, function(bucket, index) {
    bucket.splice(index, 1);
    return bucket;
  });

  if (result) {
    this._counter--;
  }

  if (this._counter / this._limit < 0.25) {
    this.tableRebalancer('decrease');
  }

  return result;
};

HashTable.prototype.retrieve = function(k, foundFn, v, notFoundFn) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  foundFn = foundFn || _.identity;

  var found = false;
  
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        found = true;
        var oldValue = bucket[i][1]
        
        bucket = foundFn(bucket, i, v);
        this._storage.set(index, bucket);

        return oldValue;
      }
    }
  }

  if (notFoundFn && !found) {
    bucket = notFoundFn(bucket, k, v)
    this._storage.set(index, bucket);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


