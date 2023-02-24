let arr = [1, 2, 55, 3, 100, 333, 9999];
let arrResult = [0, 0, 0];
countDigits(arr);

function countDigits(arr) {
    for (varNumber of arr) {
        if (count_digits(varNumber) == 2) {
            arrResult[0] = ++arrResult[0];
        }
        if (count_digits(varNumber) == 3) {
            arrResult[1] = ++arrResult[1];
        }
        if (count_digits(varNumber) == 4) {
            arrResult[2] = ++arrResult[2];
        }
    }
}

function count_digits(n) {
    numDigits = 0;
    integers = Math.abs(n);
    while (integers > 0) {
        integers = (integers - integers % 10) / 10;
        numDigits++;
    }
    return numDigits;
}
console.log(arrResult);