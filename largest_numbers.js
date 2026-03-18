function largestNumber(str) {
  const parts = str.split(/[,!?;:]/);
  
  const numbers = parts.filter(part => part !== "");
  
  return Math.max(...numbers);
}
