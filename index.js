const { object } = require("webidl-conversions");

// Code your solution here
function findMatching(array, string){
   const theChosenOnes = array.filter(function(word){
       return word.toUpperCase() === string.toUpperCase()})
    return theChosenOnes;
}


function fuzzyMatch(array, string){
    const thoseMatched = array.filter(function(word){
        return word.indexOf(string) === 0
    })
    
    return thoseMatched;
}


function matchName(array, string){
    const namesMatched =  array.filter(function(word){
       return word.name === string
   })
   
   return namesMatched;
}