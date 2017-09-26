function printNumbers(max, cols) {
    let i = 0;
    while (i <= max) {
        let str = "", j = 0;
        while (j++ < cols && i <= max) {
            if (i / 10 < 1) {
                str += " " + i++ + " ";
            } else {
                str += i++ + " ";
            }
        }
        console.log(str);
    }
}