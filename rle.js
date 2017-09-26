function rle(input) {
    let ch, output = "", i = 0, l = input.length, count;
    while (i != l) {
        count = 1;
        ch = input[i++];
        while (ch === input[i]) {
            count++;
            i++;
        }
        if (count === 1) {
            output += ch;
        } else {
            output += ch + count;
        }
    }
    return (output);
}