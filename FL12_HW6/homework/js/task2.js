let a = parseInt(prompt('enter the first side of the triangle'));
let b = parseInt(prompt('enter the second side of the triangle'));
let c = parseInt(prompt('enter the third side of the triangle'));
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || a ==='' || b === 0 || b ==='' || c === 0 || c ==='') {
    alert('input values should be ONLY numbers ');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
} else if (a === b && b === c) {
    console.log('Equilateral triangle');
} else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle’');
} else if (a + b <= c || a + c <= b || b + c <= a) {
    console.log('Triangle doesn’t exist');
} else {
    console.log('Scalene triangle’');
}
