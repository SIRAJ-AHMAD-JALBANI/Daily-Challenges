function getLongestWord(sentence) {
  sentence = sentence.replace(".", "").split(" ")
  
  console.log(sentence);

let choice = sentence.sort((a,b)=> b.length - a.length)

console.log(choice)
return choice[0]
}
getLongestWord("This sentence has multiple long words.")