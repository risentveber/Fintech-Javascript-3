
function getMinMax(string){

    let l = string.length;
    let maxi=0;
    let mini=0;

    if(l===0){

        return 'Empty line!';
    } else {

        let arr = string.match(/-?\d+(\.\d+)?/g);

        if(arr.length==0){

            maxi = arr[0];
            mini = arr[0];
            for (let i = 0; i < arr.length; i++) {

                if (+arr[i] > maxi) {

                    maxi = +arr[i];
                } else {

                    if (+arr[i] < mini) {

                        mini = +arr[i];
                    }
                }

            }
        }

    }
    console.log("mini = " + mini + ", maxi = " + maxi);
    return 0;
    //return {{minimum: mini, maximum: maxi;}}
}

//getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');

function fibonacciSimple(x) {

    if (x<0){
        return 'Incorrect data!';
    }

    return  x <= 1 ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}


function fibonacciWithCache(x) {

    let val=0;
    var arr = {};

    if (x in arr){

        val = arr[x];
    } else {

        val = x <= 1 ? x : fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
        arr[x] = val;
    }

    return val;
}

function rle(input) {

    let l = input.length;
    let p = 0;
    let i=0;
    let c='';
    let ans='';

    if (l===0){

        console.log('Empty line!');
    } else {

        while (i !== l) {

            c = input[i];

            while ((i !== l) && (c === input[i])) {
                p ++;
                i ++;
            }

            if (p <= 1) {
                ans = ans + c;
            } else {
                ans = ans + c + p;
            }

            p = 0;
        }
        console.log(ans);
    }
}


function printNumbers(max,cols) {

    let str = Math.ceil((max+1)/cols);

    for(let i=0;i<max;i=i+str){

        console.log(i);
    }
}
printNumbers(10,3);

