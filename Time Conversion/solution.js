'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let timeplast = s.toUpperCase().substr(-2);
    let [hh, mm, ss] = s.slice(0, 8).split(':');
    if (timeplast === "AM" && hh !== "12") {
        s = hh + `:` + mm + `:` + ss
        return s
    }
    if (timeplast === "AM" && hh === "12") {
        hh = `00`
        s = hh + `:` + mm + `:` + ss
        return s
    }
    if (timeplast === "PM" && hh !== "12") {
        hh = 12 + +hh
        s = hh + `:` + mm + `:` + ss
        return s
    }
    if (timeplast === "PM" && hh === "12") {
        hh = "12"
        s = hh + `:` + mm + `:` + ss
        return s
    }
    return s
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
