function secondLargest(arr) {
  arr =[...new Set(arr)]
  return arr.sort((a,b)=> a-b)[arr.length - 2]
}
console.log(secondLargest([10, -17, 55.5, 44, 91, 0]))