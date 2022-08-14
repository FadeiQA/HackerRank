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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
arr.reduce((aq, item, key)=> {
    if (item > 0) {aq.positive += 1}
    if (item === 0) {aq.nulls += 1}
    if (item < 0) {aq.negative += 1}
    if (key === arr.length - 1) {
        console.log((aq.positive / arr.length).toFixed(6))
        console.log((aq.negative / arr.length).toFixed(6))
        console.log((aq.nulls / arr.length).toFixed(6))
    }
    return aq
}, {positive: 0, negative: 0, nulls: 0})

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
