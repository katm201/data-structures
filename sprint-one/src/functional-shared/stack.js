var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {}; 

  instance._storage = {};
  instance._size = 0;
  instance = _.extend(instance, stackMethods);

  return instance;

};

var stackMethods = {



//push function 
  //
//pop function

//size function
  size: function() {
    return this._size;
  }



};


