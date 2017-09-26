function rle(input) {
  let ch, output = "", i = 0, l = input.length, count;
  while (i !== l) {
    count = 1;
    ch = input[i];
    i += 1;
    while (ch === input[i]) {
      count += 1;
      i += 1;
    }
    if (count === 1) {
      output += ch;
    } else {
      output += ch + count;
    }
  }
  return (output);
}
