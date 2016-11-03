var Hamming = function(){};

Hamming.prototype.compute = function(first, second){
  var count = 0;
  if(first !== second){
    for(var i = 0; i < first.length; i++){
      if(first[i] !== second[i]){
        count++;
      }
    }
    return count;
  }

  // if(first !== second){
  //   return first.length;
  // }
  if(first === second){
    return 0;
  }

};

module.exports = Hamming;
