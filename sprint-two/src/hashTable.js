                                                                                                                                                                                                                                                                                                                                

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check storage array at index to see if it is empty
  if (this._storage[index]) {
    var bucket = this._storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push([k, v]);
      }
    }
    

   //if it has something
      //iterate over the bucket
        //check to see if the key is present in the array
          //if it is, replace the value
          //if it isn't, push the touple to the end of the array
    
  } else {
    var bucket = [];
    this._storage[index] = bucket;
    bucket.push([k, v]);
  }

    //if it is empty
      //create an empty array (new bucket) 
      //at bucket sub0 add the key value touple
 

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


