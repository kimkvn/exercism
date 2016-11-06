//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  if(input){}

  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var letterCount = 0;
  var last = input.length - 1;

  for(var i=0; i<input.length; i++){
    for(var j=0; j<letters.length; j++){
      if(input[i] === letters[j] || input[i] === letters[j].toUpperCase()){
          letterCount++;
      }
    }
    break;
  }

  if(!input.trim()){
    return "Fine. Be that way!";
  }

  if(letterCount === 0 && input[last] === "?"){
    return 'Sure.';
  }

  if(letterCount === 0 && input[last] !== "!"){
    return 'Whatever.';
  }

  if(input === input.toUpperCase()){
    return 'Whoa, chill out!';
  }

  if(input[last] === "?"){
    return 'Sure.';
  }

  if(typeof input === "number"){
    return 'Whatever.';
  }

  if(input[last] === "!"){
    return 'Whatever.';
  }

  return 'Whatever.'
};

module.exports = Bob;
