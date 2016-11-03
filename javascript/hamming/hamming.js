var Hamming = function(){};

Hamming.prototype.compute = function(first, second){
  if(first !== second){
    return first.length;
  }
  else{
    return 0;
  }

};

module.exports = Hamming;
