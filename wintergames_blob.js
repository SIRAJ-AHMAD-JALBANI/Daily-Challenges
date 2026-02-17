function checkEligibility(athleteWeights, sledWeight) {
  let athleteTotalWeight = 0
  for(let weight of athleteWeights){
athleteTotalWeight += weight
  }
  console.log(athleteTotalWeight)
  if(athleteWeights.length === 1){
    if (athleteTotalWeight + sledWeight <= 247 && sledWeight >= 162){
      return "Eligible"
    }
    return "Not Eligible"
  }
  else if(athleteWeights.length === 2){
    if (athleteTotalWeight + sledWeight <= 390 && sledWeight >= 170){
      return "Eligible"
    }
    return "Not Eligible"
  }
  else if(athleteWeights.length === 4){
    if (athleteTotalWeight + sledWeight <= 630  && sledWeight >= 210){
      return "Eligible"
    }
    return "Not Eligible"
  }
  
}

// console.log(checkEligibility([85, 90], 170))
console.log(checkEligibility([110, 102, 90, 106], 222))
