

let tempF = parseFloat(document.getElementById("temperature").innerHTML);
let speedF = parseFloat(document.getElementById("speed").innerHTML);

let calc =
  35.74 +
  0.6215 * tempF -
  35.75 * Math.pow(speedF, 0.16) +
  0.4275 * tempF * Math.pow(speedF, 0.16);
console.log("calc", calc);
document.getElementById("windchill_no").innerHTML = calc.toFixed(1) + " mph";