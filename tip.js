function calculateTips(mealPrice, customTip) {
  const output1 = ((mealPrice.replace("$", "") * 15) / 100).toFixed(2);
  const output2 = ((mealPrice.replace("$", "") * 20) / 100).toFixed(2);
  const output3 = ((mealPrice.replace("$", "") * customTip.replace("%", "")) / 100).toFixed(2);
  
  let output = [];
  output.push("$" + output1);
  output.push("$" + output2);
  output.push("$" + output3);
  
  return output;
}

console.log(calculateTips("$19.85", "9%"));
