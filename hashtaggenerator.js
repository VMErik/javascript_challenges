// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    let description = str.split(' ').map((x) => {
        return x.charAt(0).toUpperCase() + x.slice(1);
    }).join("");
    if (description.trim().length == 0 || description.trim().length >= 140) {
        return false;
    }
    return "#" + description;
}

// TEST 1
generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"); // FALSE

// TEST 2
generateHashtag("Codewars is nice"); // #CodewarsIsNice