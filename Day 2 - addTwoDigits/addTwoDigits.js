/*
You are give a two-digit integer n. Return the sum of its digits.

Example:

For n = 29, the output should be addTwoDigits(n) = 11
*/

function addTwoDigits(num) {
    let splitNumArray = num.toString().split('')
    let digitsSum = splitNumArray.reduce((a, b) => parseInt(a) + parseInt(b))
    return digitsSum 
}