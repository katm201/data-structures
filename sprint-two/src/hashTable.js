
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found = false;
  
  this.traverse(k, function(key, bucket, bucketIndex, value) {
    if (bucket[bucketIndex][0] === key) {
      bucket[bucketIndex][1] = value;
    } else {
      bucket.push([key, value]);
    }
    found = true;
  }, v);
  if (!found) {
    var bucket = [];
    var index = getIndexBelowMaxForKey(k, this._limit);
    this._storage[index] = bucket;
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var result; 
  this.traverse(k, function(key, bucket, bucketIndex) {
    if (bucket[bucketIndex][0] === key) {
      result = bucket[bucketIndex][1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  this.traverse(k, function(key, bucket, bucketIndex) {
    if (bucket[bucketIndex][0] === key) {
      bucket.splice(bucketIndex, 1);
    }
  });

};

HashTable.prototype.traverse = function(k, func, v) {
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


