function isLeapYear(year) {
  let isLeapYear = new Date(year, 1, 29).getDate() === 29;

  if (isNaN(year)) {
    console.log('Invalid Date');
  }
  return isLeapYear ? `${year} is a leap year` : `${year} is not a leap year`;
}
isLeapYear();
