const arr = [1, 2, 3, 4, 5];

// slice()
console.log(`Sliced array: ${arr.slice(2, 4)}`);
console.log(`Original array ${arr}`);

console.log(`Shallow copy of arr: ${arr.slice()}`);
console.log(`Shallow copy of arr: ${[...arr]}`);

// splice()
console.log(`Spliced array: ${arr.splice(2, 2)}`);
console.log(`Original array ${arr}`);

//reverse
console.log(`Reversed array: ${arr.reverse()}`);
console.log(`Original array ${arr}`);

// concat
const arr1 = [1, 2, 3, 4, 5, 7];
const arr2 = [6, 7, 8, 9, 11];
console.log(`Concatenated array: ${arr1.concat(arr2)}`);

// join
console.log(`Joining of two arrays: ${arr.join("-")}`);

// at
console.log(arr.at(-1));
// See how this is simple than below traditional ways  to get last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
