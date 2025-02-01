function foo(a, b) {
  // Type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input'; //Handle non-numeric input
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input

//Alternative using explicit type conversion
function foo2(a,b){
  return Number(a) + Number(b);
}
console.log(foo2(1,'2')); //Output: 3
console.log(foo2('1','2')); //Output: 3
console.log(foo2(1, 'abc')); //Output: NaN //Handles cases where conversion fails 