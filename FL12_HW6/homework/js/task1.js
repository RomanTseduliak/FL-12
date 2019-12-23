let a = parseInt(prompt("Enter number for a"));
let b = parseInt(prompt("Enter number for b"));
let c = parseInt(prompt("Enter number for c"));
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || a =="" || b === 0 || b =="" || c === 0 || c =="") {
  console.log("Invalid input data");
  alert("Invalid input data");
} else {
  let d = b * b - 4 * a * c;
  if (d < 0) {
    console.log("no solution");
  } else if (d === 0) {
    x = -b / (2 * a);
    console.log("x=" + x);
    } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("x1=" + Math.round(x1) + " x2=" + Math.round(x2));
  }
}
