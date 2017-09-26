function fibonacciSimple(x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    return (fibonacciSimple(x - 1) + fibonacciSimple(x - 2));
}