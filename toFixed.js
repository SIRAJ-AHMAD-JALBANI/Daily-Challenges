function costToFill(tankSize, fuelLevel, pricePerGallon) {
  const price = (tankSize - fuelLevel) * pricePerGallon;
  console.log(`$${price.toFixed(2)}`)
  
  return `$${price.toFixed(2)}`

}

costToFill(15, 9.5, 3.98)
costToFill(20, 0, 4.00)
costToFill(18, 9, 3.25)
costToFill(15, 10, 3.50)
costToFill(12, 12, 4.99)