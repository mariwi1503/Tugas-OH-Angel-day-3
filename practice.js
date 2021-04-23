/**
 * 
 * The function should be multiply num1 & num2.
 * The return of the function should be integer.
 */
 const multiply = (num1, num2) => {
    /**
     * please write the solution below.
     * Don't need to write console.log after "return",
     * Because we want to pass the value on testCase function.
     * Hint: The solution only 1 line code.
     */
    return num1 * num2;
}

// Please don't changes the testCase function.
const testCase = (value, expectedValue) => {
  return console.log(value === expectedValue ? 'Passed! Test successfully!' : 'Failed! Please try again!');
}

testCase(multiply(4, 2), 8); // calling testCase function to see if the solution passed.

/**
 * 
 * The function should be substraction num1 & num2.
 * The return of the function should be integer.
 */
const substraction = (num1, num2) => {
    /**
     * please write the solution below.
     * Because we didn't pass the value to another function, 
     * Please using console.log to make the return value show up on terminal.
     * Hint: The solution is very simple, please check on "Day_2.js" at function "penambahan".
     */
    return num1 - num2;
}

console.log(substraction(39, 20));


/**
 * 
 * The function should be divide num1 & num2.
 * The return of the function should be integer.
 */
// Please write your function below this line.
const pembagian = (num1, num2) => {
    return num1 / num2;
}
console.log(pembagian());

/**
 * 
 * The function should be mod num1 & num2.
 * The return of the function should be integer.
 */
// please write your function below this line.
const mod = (num1, num2) => {
    return num1 % num2;
}
console.log(mod());