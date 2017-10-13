                                                                                                                                                                                                                                                                                                                                

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    var bucket = this._storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push([k, v]);
      }
    } 
  } else {
    var bucket = [];
    this._storage[index] = bucket;
    bucket.push([k, v]);
  }
};

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage[index];
//   if (bucket) {
//     for (var i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === k) {
//         return bucket[i][1];
//       }
//     }
//   }
// };

HashTable.prototype.retrieve = function(k) {
  debugger;
  var result; 
  this.traverse(k, function(key, bucketElement) {
    if (bucketElement[0] === key) {
      result = bucketElement[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};

HashTable.prototype.traverse = function(k, func, v) {
  func = func || _.identity;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      func(k, bucket[i], v);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


