// task create a function called getRandomInt that has the parameters
// Task min and max and an empty body for now

// hoisting, bubble up to the top of the file
// rækkefølge i javascript er ikke vigtig
// console.log(getRandomInt(0, 10));

function getRandomInt(min, max) {
    // Math.floor() runder ned
    return Math.floor(Math.random() * (max + 1 - min) - min);
}


// anonymous function 
// function uden navn
const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}

// arrow function
// arrow function er en forkortet version af en anonym function
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}


// acion is a callback funtion
// a callback is a function that is passed as an argument to another function
// possinly with the aim of calling it later ()
// callback function er en function der bliver kaldt af en anden function

                        // name: string     action: function
function genericPerformer(name, action) {
    return action(name);
}

// Lasse coding
const codingAction = (name) => `${name} likes coding..`;

// assignement: using the generic performer, I would like to say:
// assignment: Lasse likes coding.. write it below

console.log(genericPerformer('Lasse', codingAction));

// Andreas sleeping
// console.log(getRandomInt);

function sleepingAcion(name) {
    return `${name} loves sleeping`;
}

// Desired result: Andreas loves sleeping
console.log(genericPerformer('Andreas', sleepingAcion));

// Tara boxing
// assignment: the desired resilt is: tara owns at boxing
// assigment: write it all as a one-liner
console.log(genericPerformer('Tara', (name) => `${name} owns at boxing`));
