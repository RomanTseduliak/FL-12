function pipe(x) {
  return x + 1;
}
console.log(pipe(1, pipe()));
