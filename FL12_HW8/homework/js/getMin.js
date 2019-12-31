function getMin(array) {
  let sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] < sortedArray[i + 1]) {
      return sortedArray[i];
    }
  }
}
console.log(getMin([3, 0, -3]));
