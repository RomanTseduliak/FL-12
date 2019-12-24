let a = parseInt(prompt('enter the first side of the triangle'));
let b = parseInt(prompt('enter the second side of the triangle'));
let c = parseInt(prompt('enter the third side of the triangle'));
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || a ==='' || b === 0 || b ==='' || c === 0 || c ==='') {
    window.alert('input values should be ONLY numbers ');
} else if (a <= 0 || b <= 0 || c <= 0) {
    window.alert('A triangle must have 3 sides with a positive definite length ');
} else if (a === b && b === c) {
    window.alert('Equilateral triangle');
} else if (a === b || b === c || a === c) {
    window.alert('Isosceles triangle’');
} else if (a + b <= c || a + c <= b || b + c <= a) {
    window.alert('Triangle doesn’t exist');
} else {
    window.alert('Scalene triangle’');
}
