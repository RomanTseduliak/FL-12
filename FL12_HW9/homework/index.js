function convert(...args) {
  let res = [];
  for (let i = 0; i < args.length; i++) {
    args[i] =
      typeof args[i] === `number`
        ? res.push(String(args[i]))
        : res.push(parseInt(args[i]));
  }
  return res;
}
