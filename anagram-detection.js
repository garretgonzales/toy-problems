/*-------------------------------------------------------------------------------//
//    POST COMMENTS 
            - Look to chain methods such as sort() and join()
            - Add ternary
            - == vs the already strictly 
            - Seperate function to sort --> solution 
            - One liner? --> solution
//
//------------------------------------------------------------------------------ /*

// write the function isAnagram
// 11 lines
var isAnagram = function (test, original) {
    const origArr = original.toLowerCase().split('');
    let testLow = test.toLowerCase();

    for (let i = 0; i < testLow.length; i++) {
        if (origArr.includes(testLow[i]) && origArr.length === test.length) {
            return true;
        } else {
            return false;
        }
    }
};

/* 
console.log(isAnagram('foefet', 'toffee'));
console.log(isAnagram('Buckethead', 'DeathcubeK')); //cap check
console.log(isAnagram('ball', 'alax')) // different chars 
console.log(isAnagram('ball', 'llabb')); // char count
console.log(isAnagram("Twoo", "WooT"));
 */

//---------------------------------------------------------------------------------------- ***

// write the function isAnagram
// 17 lines
var isAnagram = function (test, original) {
  let t = test.toLowerCase();
  let o = original.toLowerCase();

  // length test
  if (t.length !== o.length) {
    return false;
  }

  for (var i = 0; i < t.length; i++) {
    if (Array.from(o).includes(t[i])) {
      return true;
    } else {
      return false;
    }
  }
};

/* console.log(isAnagram('foefet', 'toffee'));
console.log(isAnagram('Buckethead', 'DeathcubeK'));
console.log(isAnagram('ball', 'alax'))
console.log(isAnagram('ball', 'llabb'));
console.log(isAnagram("Twoo", "WooT")); */
