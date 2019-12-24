let a = parseInt(prompt('Enter number for a'));
let b = parseInt(prompt('Enter number for b'));
let c = parseInt(prompt('Enter number for c'));
const dicriment4 = 4;
const dicriment2 = 2;
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || a ==='' || b === 0 || b ==='' || c === 0 || c ==='') {
  console.log('Invalid input data');
  alert('Invalid input data');
} else {
  let d = b * b - dicriment4 * a * c;
  if (d < 0) {
    console.log('no solution');
  } else if (d === 0) {
    const x = -b / (dicriment2 * a);
    console.log('x=' + x);
    } else {
    let x1 = (-b + Math.sqrt(d)) / (dicriment2 * a);
    let x2 = (-b - Math.sqrt(d)) / (dicriment2 * a);
    console.log('x1=' + Math.round(x1) + ' x2=' + Math.round(x2));
  }
}
