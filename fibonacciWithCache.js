let cache = {};

function fibonacciWithCache(x) {
    if (x in cache) {
        return cache[x];
    }
    if (x === 0 || x === 1) {
        cache[x] = x;
        return x;
    }
    let num = fibonacciWithCache(x - 2) + fibonacciWithCache(x - 1);
    cache[x] = num;
    return num;
}