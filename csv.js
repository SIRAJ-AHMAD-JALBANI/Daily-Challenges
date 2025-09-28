function getHeadings(csv) {
  csv = csv.split(",")
  let newArr= []
  for (let value of csv){
  newArr.push(value.trim())
  }
  return newArr
}

getHeadings("first name,last name,phone")