/*
You are going to be given a word.Your job is to
return the middle character of the word.If the word 's length is odd, return the middle character.
If the word's length is even,
return the middle 2 characters.
*/


//loop through string
//check if even or odd
//return 2 chars in middle if even
//return 1 char in middle if odd
function getMiddle(s) {
    var middle = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
        return s[middle - 1] + s[middle];
    } else {
        return s[middle];
    }
};

console.log(getMiddle('dad'));