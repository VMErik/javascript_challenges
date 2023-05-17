// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

function moveZeros(arr) {
    const distincToZero = arr.filter((letter) => {
        return letter !== 0;
    });
    const equalToZero = arr.filter((letter) => {
        return letter === 0;
    });
    return distincToZero.concat(equalToZero);
}

// Test 1
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // [false,1,1,2,1,3,"a",0,0]