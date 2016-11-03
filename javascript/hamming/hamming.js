var Hamming = function(){};

Hamming.prototype.compute = function(first, second){
  if(first !== second){
    return 1;
  }
  else{
    return 0;
  }

};

module.exports = Hamming;
