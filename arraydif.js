// Challenge : 
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}
// Test 1
arrayDiff([1, 2], [1]); // 2
// Test 2
arrayDiff([1, 2, 2, 2, 2, 2, 3], [1, 2]); // 3