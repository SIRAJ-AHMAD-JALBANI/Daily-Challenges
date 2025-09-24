function isPerfectSquare(n) {
  let root = Math.sqrt(n);
  console.log(root)
  return root === Math.floor(root);
}

// console.log(isPerfectSquare(9));      
console.log(isPerfectSquare(99));     
// console.log(isPerfectSquare(25281));  
