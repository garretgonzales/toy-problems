/* In this kata you will create a function that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.*/



function filter_list(l) {
    // Return a new array with the strings filtered out
    let filtered = [];

    l.filter(function (i) {
        if (typeof i === 'number') {
            filtered.push(i);
        }
    });
    return filtered;
}

console.log(filter_list([1, 2, 3, 'bird', 4, 'dance']));