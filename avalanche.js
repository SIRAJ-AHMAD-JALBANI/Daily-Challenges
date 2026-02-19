function avalancheRisk(snowDepth, slope) {
  let dic = {
    'Gentle': {
      Shallow: "Safe",
      Moderate: "Safe",
      Deep: "Safe",
    },
    'Steep': {
      Shallow: "Safe",
      Moderate: "Risky",
      Deep: "Risky",
    },
    "Very Steep": {
      Shallow: "Safe",
      Moderate: "Risky",
      Deep: "Risky",
    }
  };

  return dic[slope][snowDepth];
}

console.log(avalancheRisk("Shallow", "Gentle"))