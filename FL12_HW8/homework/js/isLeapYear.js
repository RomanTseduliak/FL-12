function isLeap(year) {
  let isLeapYear = new Date(year, 1, 29).getDate() === 29;

  if (isNaN(year)) {
    console.log('Invalid Date');
  } else if (isLeapYear) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
  return isLeapYear;
}
console.log(isLeap('fdsfs'));
