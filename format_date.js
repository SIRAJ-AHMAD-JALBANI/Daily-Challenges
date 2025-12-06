function formatDate(dateString) {
  let month_date = dateString.split(",")
  let month = month_date[0].split(" ")[0]
  let date = month_date[0].split(" ")[1]
  let output_year =  month_date[1].trim()
  let months = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12",
  }
  let output_date = 0
  if(date.length === 1){
     output_date += date
  }
  else {
    output_date = date
  }
  let output_month = months[month]
  return `${output_year}-${output_month}-${output_date}`
}

console.log(formatDate("December 6, 2025"))
console.log(formatDate("January 1, 2000"))
console.log(formatDate("November 11, 1111"))