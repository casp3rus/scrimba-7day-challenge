/*
Check if all digits in a given integer are even.

Example
    • For n = 248622, the output should be evenDigitsOnly(n) = true.
    • For n = 642386, the output should be evenDigitsOnly(n) = false.
*/

function evenDigitsOnly(num) {
    let numDigitsArray = num.toString().split('')
    const even = (element) => element % 2 === 0
    return numDigitsArray.every(even)
}