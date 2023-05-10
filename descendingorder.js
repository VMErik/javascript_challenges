// Your task is to make a function that can take any non-negative integer as an argument and return it 
// with its digits in descending order. Essentially, 
// rearrange the digits to create the highest possible number.
function descendingOrder(n) {
    let arrNumber = Array.from(String(n), Number);
    let orderedNumber = arrNumber.sort().reverse().join().replaceAll(",", "");
    return parseInt(orderedNumber);
}

// Test 1:
descendingOrder(123456789) // 987654321
    // Test 2:
descendingOrder(145263) // 654321