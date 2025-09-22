function digitsOrLetters(str) {
  // console.log(str);
  let lowerCase = str.toLowerCase()
  console.log(lowerCase)
  let newStr = lowerCase.replace(/[^a-z0-9]/g, "")
  // return str;
  let digits = newStr.replace(/[a-z]/g,"")
  console.log(numbers)
  let numbers = newStr.replace(/[0-9]/g,"")
  console.log(digits)
  if(numbers.length > digits.length){
    return "letters";
  }
  else if(numbers.length < digits.length){
    return "digits";
  }
  else {
    return "tie"
  }
}



// digitsOrLetters("a1b2c3d")
console.log(digitsOrLetters("a1b2c3d"))