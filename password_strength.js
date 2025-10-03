function checkStrength(password) {
  let strength = 0;
  if(password.length  >= "8"){
    strength ++
  }
   if(/[A-Z]/.test(password) && /[a-z]/.test(password)){
    strength ++
  }
  if(/[0-9]/.test(password)){
    strength ++
  }
  if(/[!@#$%^&*]/.test(password)){
    strength ++
  }
  
  // return strength;
  if(strength < 2){
    return "weak"
  }
  else if(strength >= 2 && strength <= 3){
    return "medium"
  }
  else {
    return "strong"
  }
}
console.log(checkStrength("PASSWORD"))