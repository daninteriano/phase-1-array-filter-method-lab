const { object } = require("webidl-conversions");

// Code your solution here
function findMatching(array, string){
   const theChosenOnes = array.filter(function(word){
       return word === string})
    return theChosenOnes;
}


function matchName(array, string){
     return array.filter(function(){
        return object.values(array) === string;
    })
}

function fuzzyMatch(array, string){
    const thoseMatched = array.filter(function(word){
        return word.includes(string); 
       })
    return thoseMatched;
}