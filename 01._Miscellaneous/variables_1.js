// avoide using var, use let or const instead
// var name = 'Martin';
// var finder ikke fejl med samme variabelnavn

const name = 'Martin';

// const is NOT a constant
// that means that const CAN have its value changed
// const is a constant in the DECLARATION
// const MUST be delcared as it is initialized

// name = "Martin";

// ændre name værdien
// objecter og arrays
const me = {
    name: 'Martin'
};
me.name = "test";

console.log(me);

// making a list with code
const hobbies = ['test','coding'];

// removing last added ('coding')
hobbies.pop();

// adding 'drawing' and 'painting'
hobbies.push('drawing', 'painting');

console.log(hobbies);

const jsObject = {
    name: 'Martin',
    // comment
};

// "" vs. ''

const dancerName = "Computer"

// "" or '' or ´´ = string literals
console.log("I can compile!");
console.log('I can compile!');
// ´ (backticks)
// ´´ = template strings
// ${} synstax = string interpolation
console.log(`${dancerName}  can dance '' ""
    line 1
    line 2
    ""''""`);

// console.log m vs . +

const assignmentDescription = "...and the value is...";
const value = 4;

// don't use plus in the console.log to avoid type coercion
// + bliver 4 tallet hvidt da den bliver til en string
console.log(assignmentDescription, value);


// data types
// number, string, boolean, object, bitInt, symbol, null, undefined

