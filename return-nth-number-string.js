const arr = ['Hello', 'World', 'Codewars', 'Katas', 'bananananana'];
let soArr = arr.sort((a, b) => a.length - b.length);

let n = soArr.indexOf((soArr))

function longest(arr, n) {
    //sort my length
    let originalArr = arr.slice(0);
    originalArr.sort((a, b) => {
        return b.length - a.length || arr.indexOf(a) - arr.indexOf(b)
    })
    return originalArr[n - 1];
}

console.log('')
console.log(n)
console.log(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'], 4));