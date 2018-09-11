
    //look for matching chars
    //return true if duplicate chars
    //else return false
// MY SOLUTION
function hasUniqueChars2(str) {
    let obj = {};
    for (let g = 0; g < str.length; ++g) {
        let char = str[g];
        if (obj[char]) return false;
        else obj[char] = true;
    }
    return true;
}

console.log(hasUniqueChars2('abc')); 
