
var HashTable = function() {
  this._limit = 8;
  this.toupleCounter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found = false;
  
  this.bucketTraverse(k, function(key, bucket, bucketIndex, value) {
    if (bucket[bucketIndex][0] === key) {
      bucket[bucketIndex][1] = value;
    } else {
      bucket.push([key, value]);
      this.toupleCounter++;
    }
    found = true;
  }, v);
  if (!found) {
    var bucket = [];
    var index = getIndexBelowMaxForKey(k, this._limit);
    this._storage[index] = bucket;
    bucket.push([k, v]);
    this.toupleCounter++;
  }

  if (this.toupleCounter / this._limit >= 0.75) {
    this.tableRebalancer('increase'); 
  }

};

HashTable.prototype.tableRebalancer = function(increaseOrDecrease) {

  if (increaseOrDecrease === 'increase') {
    var oldStorage = this._storage;
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
  }

  //if argument is decrease
    //half the size


  for (var i = 0; i < oldStorage.length; i++) {
    var bucket = oldStorage[i];
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        this.insert(bucket[j][0], bucket[j][1]);
      }
    }
  }
};



HashTable.prototype.retrieve = function(k) {
  var result; 
  this.bucketTraverse(k, function(key, bucket, bucketIndex) {
    if (bucket[bucketIndex][0] === key) {
      result = bucket[bucketIndex][1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  this.bucketTraverse(k, function(key, bucket, bucketIndex) {
    if (bucket[bucketIndex][0] === key) {
      bucket.splice(bucketIndex, 1);
      //decrease the count
    }
  });

};

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


/*To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled

To save space, make sure the hashTable halves in size when space usage falls below 25 percent*/


/*
 * Complexity: What is the time complexity of the above functions?
 */


