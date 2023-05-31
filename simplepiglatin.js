// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
    let content = str.split(' ');
    const pattern = new RegExp('^[A-Z]+$', 'i');
    let reverse = content.map(function(word) {
        return (pattern.test(word)) ? word.slice(1) + word.charAt(0) + 'ay' : word;
    });
    return reverse.join(' ');
}
// Test 1
// pigIt('Pig latin is cool')  // igPay atinlay siay oolcay
// pigIt('Hello world !') //  elloHay orldway !