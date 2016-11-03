var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dna){

  var rna = '';

  for(var i = 0; i < dna.length; i++){
    if(dna[i] === 'C'){
      rna += 'G';
    }
    if(dna[i] === 'G'){
      rna += 'C';
    }
    if(dna[i] === 'A'){
      rna += 'U';
    }
    if(dna[i] === 'T'){
      rna += 'A';
    }
  }

  return rna;
  
};


module.exports = DnaTranscriber;
