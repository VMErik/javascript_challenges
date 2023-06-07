// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 
// (the cat cannot climb on the shelf directly above its head), according to the illustration:
// Task
// Find the minimum number of jumps to go from start to finish
// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

function solution(start, finish) {
    const result = ((finish - start) + 1) / 3
    if (Number.isInteger(result)) {
        return Math.round(result + 1)
    }
    return Math.round(result)
}