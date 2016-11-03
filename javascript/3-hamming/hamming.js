var Hamming = function(){};

Hamming.prototype.compute = function(first, second){
  var count = 0;
  if(first.length != second.length){
    throw Error("DNA strands must be of equal length.");
  }
  else if(first !== second){
    for(var i = 0; i < first.length; i++){
      if(first[i] !== second[i]){
        count++;
      }
    }
    return count;
  }
  return count;
};

module.exports = Hamming;
