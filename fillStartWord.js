const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let str = [startWord,word]
  word = str[1] ?? undefined
    
  if (word === null || word === undefined){
    return undefined
  }
  if (word.match(str[0])){
    return str[1]
  
  }else {
  return str[0]+str[1]
  }
}
console.log(fillStartWord('first','firststep'))


module.exports = fillStartWord
