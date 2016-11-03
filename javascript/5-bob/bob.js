//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
  return 'Whatever.'
};

module.exports = Bob;
