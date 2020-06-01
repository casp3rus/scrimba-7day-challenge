/*
Given a rectangular matrix of characters,
add a border of asterisks(*) to it.

Example:

For:

array = ['abc', 'def']

the output shoud be:

addBorder(array) = [
                    '*****',
                    '*abc*',
                    '*def*',
                    '*****'
                    ]

*/



function addBorder(array) {
    let asterisksLine = '*'.repeat(array[0].length)
    array.unshift(asterisksLine)
    array.push(asterisksLine)
    let result = array.map(element => {
        return '*' + element + '*'
    })
    return result
}