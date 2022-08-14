'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    arr.sort().reduce((sum, current, key) => {
        if (key < arr.length - 1) {
            sum.minSum += current
        }
        if (key > 0) {
            sum.maxSum += current
        }
        if (key === arr.length - 1) {
            console.log(sum.minSum, sum.maxSum)
        }
        return sum
    }, {minSum: 0, maxSum: 0})
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
