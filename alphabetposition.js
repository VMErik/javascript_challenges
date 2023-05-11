// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
    const pattern = new RegExp('^[A-Z]+$', 'i');
    let alphabetNumbers = [];
    const arrText = Array.from(text);
    arrText.forEach((letter) => {
        if (pattern.test(letter)) {
            alphabetNumbers.push(alphabet.indexOf(letter.toUpperCase()) + 1);
        }
    });
    return alphabetNumbers.join(' ');
}

// Test:
alphabetPosition("hola amigo"); // '8 15 12 1 1 13 9 7 15'