const getElementSize = (windowSize, elementVw, elementVh) => {
  // Splits "1440 x 900" into ["1440", "x", "900"]
  const parts = windowSize.split(" ");
  const winW = parseInt(parts[0]);
  const winH = parseInt(parts[parts.length - 1]);

  // Remove the "vw" or "vh" and convert to a number
  const vwVal = parseFloat(elementVw.replace("vw", ""));
  const vhVal = parseFloat(elementVh.replace("vh", ""));

  // Calculate percentages
  const w = (vwVal / 100) * winW;
  const h = (vhVal / 100) * winH;

  // Return formatted string with rounded integers
  return `${Math.floor(w)} x ${Math.floor(h)}`;
};

console.log(getElementSize("1440 x 900", "100vw", "114vh")); 
// Output: "1440 x 1026"
