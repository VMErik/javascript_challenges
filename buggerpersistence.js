// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let iteration = 0;
    while (num.toString().length != 1) {
        let arrNum = Array.from(num.toString());
        arrNum.forEach(function(valor, index) {
            if (index === 0) {
                num = valor * 1
            } else {
                num = num * arrNum[index];
            }
        });
        iteration++;
    }
    return iteration;
}