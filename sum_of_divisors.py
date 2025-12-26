function sumDivisors(n){
    let output = 0
    for (let i = 1; i <= n; i ++ ){
         if(n % i == 0){
            output += i
         }
    }
    return output
    
    
    
}
console.log(sumDivisors(6))