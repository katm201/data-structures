
var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  
  var result = this.retrieve(k, function(bucket, index, value) {
    bucket[index][1] = value;
    return bucket;
  }, v, function(bucket, key, value) {
    bucket = bucket || [];
    bucket.push([key, value]);
    return bucket;
  });

  this._counter++;

  if (this._counter / this._limit >= 0.75) {
    this.tableRebalancer('increase');
  }

  return result;
};

// HashTable.prototype.tableRebalancer = function(increaseOrDecrease) {
  
//   if (increaseOrDecrease === 'increase') {
//     var oldStorage = this._storage;
//     this._limit = this._limit * 2;
//     this._storage = LimitedArray(this._limit);
//   }

//   if (increaseOrDecrease === 'decrease') {
//     debugger;
//     var oldStorage = this._storage;
//     this._limit = this._limit / 2;
//     this._storage = LimitedArray(this._limit);
//   }

  
//   this._counter = 0;
  
//   for (var key in oldStorage) {
//     if (typeof oldStorage[key] !== 'function') {
//       var bucket = oldStorage[key];
//       if (bucket) {
//         for (var i = 0; i < bucket.length; i++) {
//           this.insert(bucket[i][0], bucket[i][1]);
//         }
//       }
//     }
//   }
// };

HashTable.prototype.tableRebalancer = function(increaseOrDecrease) {
  if (increaseOrDecrease === 'increase') {
    this._limit = this._limit * 2;
  }

  if (increaseOrDecrease === 'decrease') {
    this._limit = this._limit / 2;
  }

  var newLimitedArray = LimitedArray(this._limit)

  this._storage.each(function(bucket, index, storage) {
    newLimitedArray.set(index, bucket);
  });

  this._storage = newLimitedArray;
};

HashTable.prototype.remove = function(k) {
  return this.retrieve(k, function(bucket, index) {
    this._counter--;
    bucket.splice(index, 1);
    return bucket;
  });
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


