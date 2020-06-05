/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be prime.

Example

• sumAllPrimes(10) should return 17
• sumAllPrimes(977) should return 73156
*/

function sumAllPrimes(num) {
    let allPrimes = []
    for(let i = 2; i <= num; i++) {
        for(let j = 2; j ,+ i; j++) {
            if(i === j) {
                allPrimes.push(i)
            }
            if(i % j === 0) {
                break
            }
        }
    }
    return allPrimes.reduce((a, b) => a + b)
}