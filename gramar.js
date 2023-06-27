// --- STATEMENTS ---
// 1. Conditional Statements - if and switch

// -- if statement --
if (expression) {
} else {
}

// -- switch statement --
switch (expression) {
  case expression: // case clause
    statements;
    break; // disruptive statement
  default:
    statements;
}

// 2. Looping Statements - for, while and do

// -- while statement --
while (expression) {}

// -- for loop statement initialization, condition and the increment --
for (let i = 0; i < 10; i++) {}
// Object.hasOWnProperty(variable) - to determine whether the property name is truly a member of the object
for (myvar in obj) {
  if (obj.hasOwnProperty(myvar)) {
    // statements
  }
}

// -- do statement : expression is tested after the block is executed instead of before like in while --
do {} while (expression);

// -- try statement : mainly for catching exceptions thrown by the block --
try {
} catch (variable) {}

// 3. Disruptive statement - break, return and throw

// -- throw statemt : raises an exception, it can be in a try block --
throw expression;

// -- return statement : causes the early return from a function and if the return expression is not specified then the return value will be undefined--
return expression;

// -- break statement :causes an exit from a loop statement or a switch statement --

// -- falsy values --
// false, null, undefined, empty string, the number 0 and the number NaN

// --- EXPRESSIONS ---
// --expression statement can either assign values to one or more variables or memebrs, invoke a method, delete a property from an object
// (a) . [] () -> refinement and invocatio
// (b) delete new typeof + - ! -> Unary operators
// (c) * / % -> multiplication, division, remainder
// (d)  <= >= < > -> Inequality
// (e) === !== -> equality
// (f) && || ?: -> logical and , logical or and ternary
// Invocation causes the execution of a function value

// -- Literals --
// Object Literals are a convinient notation for specifying new objects. The name of the properties can be specified as names or as strings
// number, string, object, array, function and regexp literals

// -- Functions --
// A function literal defines a function value. Optional name , specify a list of parameters.
function person(firstName, lastName) {
  // function body - statements
}
