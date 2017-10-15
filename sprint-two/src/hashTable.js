
var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var found = false;
  
//   this.bucketTraverse(k, function(key, bucket, bucketIndex, value) {
//     if (bucket[bucketIndex][0] === key) {
//       bucket[bucketIndex][1] = value;
//     } else {
//       bucket.push([key, value]);
//     }
//     found = true;
//   }, v);
//   if (!found) {
//     var bucket = [];
//     var index = getIndexBelowMaxForKey(k, this._limit);
//     this._storage[index] = bucket;
//     bucket.push([k, v]);
//   }

//   this._counter++;

//   if (this._counter / this._limit >= 0.75) {
//     this.tableRebalancer('increase'); 
//   }
// };

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  this._counter++;
  
  if (bucket) {
  //if there's something currently at that index
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        var oldValue = bucket[i][1];
        bucket[i][1] = v;
        return oldValue;
      }
    }
    //iterate over bucket
      //if bucket[i][0] is equal to our new key
        //assign bucket[i][1] to oldValue variable
        //assign our new value to bucket[i][1]
        //return oldValue

  } else {
    bucket = [];
    this._storage.set(index, bucket);
  //if there's nothing currently at that index
    //create an empty array and assign it to bucket
    //this._storage.set(index, bucket)
  }
  bucket.push([k, v]);
  //push [k, v] to bucket
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



// HashTable.prototype.retrieve = function(k) {
//   var result; 
//   this.bucketTraverse(k, function(key, bucket, bucketIndex) {
//     if (bucket[bucketIndex][0] === key) {
//       result = bucket[bucketIndex][1];
//     }
//   });
//   return result;
// };

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
    //loop over the bucket
      //if bucket[i][0] === k
        //return bucket[i][1]
  }
};

HashTable.prototype.remove = function(k) {
  this.bucketTraverse(k, function(key, bucket, bucketIndex) {
    if (bucket[bucketIndex][0] === key) {
      bucket.splice(bucketIndex, 1);
      
    }
  });
  
  this._counter--;

  if ((this._limit / 2 >= 8) && (this._counter / this._limit <= 0.25)) {
    this.tableRebalancer('decrease'); 
  }
  
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

/*
 * Complexity: What is the time complexity of the above functions?
 */


