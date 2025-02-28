// Create a matchesAll function that:

// Takes any number of condition functions.
// Returns a callback, intended for use as a callback in array filter() method.
// Said callback should run all condition functions with all params it receives from the filter.
//  If all callbacks return truthy values, it should return true, otherwise false.

const numbers = [42, -19, 5, 0, 24, 99, -23, 0, 55];

const matchesAll = (...arg)=>{
return function(...el){
    console.log('el',el)
    console.log('asda',...arg)
    return arg.every()

}

}

numbers.filter(
  matchesAll(x => x > 0),
); // [42, 5, 24, 99, 55];

numbers.filter(
  matchesAll(x => x % 2 === 0),
); // [42, 0, 24, 0];

numbers.filter(
  matchesAll(
    x => x > 0,
    x => x % 2 === 1,
  ),
); // [5, 99, 55];

numbers.filter(
  matchesAll(),
); // [42, -19, 5, 0, 24, 99, -23, 0, 55];

numbers.filter(
  matchesAll(
    (x, i, arr) => x > i + arr.length,
  ),
); // [45, 24, 99, 55];
// console.log('asda')