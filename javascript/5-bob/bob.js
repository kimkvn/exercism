//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var Bob = function() {};

Bob.prototype.hey = function(input) {

  if(typeof input === "number"){
    return 'Whatever.';
  }

  if(input === input.toUpperCase()){
    return 'Whoa, chill out!';
  }
  var last = input.length - 1;
  if(input[last] === "?"){
    return 'Sure.';
  }
  if(input[last] === "!"){
    return 'Whatever.';
  }
  for(var i=0; i<input.length; i++){
    for(var j=0; j<letters.length; j++){
      if(input[i] === letters[j]){
        return 'Whatever.'
      }
    }
  }
  return 'Whatever.'
};

module.exports = Bob;
