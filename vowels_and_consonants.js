function count(str) {
  let vowelNum  = 0;
  let consonantNum  = 0;

  for(let vowel of str.toLowerCase()){
    if(['a','e','i','o','u'].includes(vowel)){
      vowelNum ++
    }
  }
  for(let consonant of str.toLowerCase()){
    if(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
.includes(consonant)){
      consonantNum ++
    }
  }
  return [vowelNum, consonantNum];
}
console.log(count("The quick brown fox jumps over the lazy dog."))