function wiseSpeak(sentence) {
  let punctuation = sentence.slice(-1);
  let words = sentence.slice(0, -1).split(" ");
  const targetWords = ["have", "must", "are", "will", "can"];
  let index = words.findIndex(word => targetWords.includes(word.toLowerCase()));
  if (index === -1) return sentence;
  let before = words.slice(0, index + 1);
  let after = words.slice(index + 1);
  let newSentence = after.join(" ") + ", " + before.join(" ").toLowerCase() + punctuation;
  return newSentence.charAt(0).toUpperCase() + newSentence.slice(1);
}
