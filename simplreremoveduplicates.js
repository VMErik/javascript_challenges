// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
function solve(arr) {
    let duplicates = arr.slice().filter((n, i) => arr.indexOf(n) !== i)
    for (let i = 0; i < duplicates.length; i++) {
        arr.splice(arr.indexOf(duplicates[i]), 1)
    }
    return arr
}

// Test 1 : 
// solve([3,4,4,3,6,3]) // [4,6,3]