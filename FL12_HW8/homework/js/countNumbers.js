function weAreNombers(token) {
  let count = '';
  for (let i = 0; i < token.length; i++) {
    if (!isNaN(parseInt(count[i]))) {
      count += token[i];
    }
  }
  return count;
}

weAreNombers();

