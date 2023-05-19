// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.
// Example : 
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
    let phoneNumber = "";
    numbers.forEach(function(number, index) {
        (index === 0) ? phoneNumber += "(": (index === 3) ? phoneNumber += ") " : (index === 6) ? phoneNumber += "-" : phoneNumber = phoneNumber;
        phoneNumber = phoneNumber + String(number);
    })
    console.log(phoneNumber);
}