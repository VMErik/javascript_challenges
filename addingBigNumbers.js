// We need to sum big numbers and we require your help.
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

function add(a, b) {
    let textResult = ''
    let carry = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || carry) {
        carry += ~~a.pop() + ~~b.pop()
        textResult = carry % 10 + textResult
        carry = carry > 9
    }
    return textResult
}