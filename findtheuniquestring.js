function findUniq(arr) {
    let diferentContainer = [];
    let minValue = 1000000;
    let diferrentString = "";
    arr.map(function(word) {
        let distinctLetters = [];
        word.split('').forEach(function(letter) {
            if (letter.trim() != "") {
                if (!distinctLetters.includes(letter.toLowerCase())) {
                    distinctLetters.push(letter.toLowerCase());
                }
            }
        });
        const existe = diferentContainer.find((dif) => dif.letters.sort().join() === distinctLetters.sort().join());
        if (existe) { existe.qty = existe.qty + 1; } else {
            diferentContainer.push({ letters: distinctLetters.sort(), qty: 1, word: word });
        }
    });
    diferentContainer.forEach((diferent) => {
        if (diferent.qty < minValue) {
            minValue = diferent.qty;
            diferrentString = diferent.word;
        }
    });

    return diferrentString;
}

// Tests
// findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]) -- >  Harry Potter
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) --> foo