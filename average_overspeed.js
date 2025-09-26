function speeding(speeds, limit) {
let count = 0
let sum = 0
for (let value of speeds) {
  if (value > limit){
    count++
    sum += value - limit
  }
}
let aveOverSpeed = count > 0 ? sum / count : 0
return [count, aveOverSpeed]

}