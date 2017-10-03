function fibonacciSimple(x) {

    if (x<0){
        return 'Incorrect data!';
    }

    return  x <= 1 ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}