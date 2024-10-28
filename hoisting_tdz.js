// Hoisting and TDZ in Action
// Hoisting with varibles
console.log(one); // Hoisted with undefined so will not show any error.
//console.log(two); // Let and const can't be hoisted so this is TDZ for let and const.
//console.log(three);

var one = 9; // var will be initialized with undefined during creation phase.
const two = 2;
let three = 2;

// Hoisting with functions
// Function Declartion
myFunction();
function myFunction() {
  console.log('Function declaration done');
}

// Function Expression with var
abc();
// This will give error like abc is not function as its will be set as undefined. abc = undefined
// So it can't be called like function
var abc = function () {
  console.log('function expression with var');
};

//Function Expression with let or const
xyz();
// This will give referanceError like xyz cant be accessed before initialization.
// This is because const and let can't be accessed in TDZ.
const xyz = function () {
  console.log('function expression with let or const');
};

// Arrow function
arrowFun();
// As its const it will give ReferanceError. If its var, would have given, not a function error like above.
const arrowFun = () => {
  console.log('arrow function');
};

// So only function that can be used before declaration is Function Declaration.
