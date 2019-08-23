// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
const consume = (a, b, cb) => {
  return (a,b);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = (a,b) => {
  return (a + b);
}
let multiply = (a, b) => {
  return (a * b);
}
function greeting(firstname, lastname){
  return `Hello, ${firstname} ${lastname}, nice to meet you!`
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(add(2,2)); // 4
console.log(multiply(10, 16)); // 160
console.log(greeting("Mary", "Poppins")); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:  nestedfunction can access variaiable internal because of lexical scope. Child functions can access parent functions variables but not visa versa.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
