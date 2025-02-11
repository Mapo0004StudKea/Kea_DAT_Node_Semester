"use strict"

// totalGlobalVariable = "never EVER!!! do this";
//var totalGlobalVariable = "Also never do this!";

// global scope

// rules:
// always use const if you can get away with it
// otherwise use let

function myfunction() {
    // function scope
}

// block scope, fx i en if statement
{
    var myValue = true;
    { 
        var myValue = false;
    }
    // console.log(myValue);
}

// block scope, fx i en if statement
{
    let myValue = true;
    { 
        let myValue = false;
    }
    // console.log(myValue);
}

// for loop
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// fix, lav det om til let
for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}