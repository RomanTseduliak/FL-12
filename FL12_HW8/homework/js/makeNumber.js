function makeNumber(str) {
  let matches = str.replace(/\D/g, '');
  return matches;
}
console.log(makeNumber('fdsm10fs42bjsdfbj99h'));
