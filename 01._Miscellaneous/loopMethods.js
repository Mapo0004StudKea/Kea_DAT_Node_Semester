
// Uge 3 ting

// forEach, map, filter, reduce, findIndex, find

// køre med nodem

const myNumbers = [1, 2, 3, 4, 5, 6];

// assignement: get a list of double the numbers

const doubleNumbers = myNumbers.map((myNumbers) => myNumbers * 2) 

console.log(doubleNumbers);

const satelites = [
    { 
        name: "International Space Station",
        height: 12_000
    },
    {
        name: "MIR",
        height: 0
    },
    {
        name: "James wWbb",
        height: 27_000
    }
]

// assignemnt: Lower the height for all satalites

// bruger map fordi det er en-til-en og vil gerne returnere en ny liste
// const changedHeights = satelites.map(satellite => {
//     satellite.height -= 500;
//     return satellite;
// });

// console.log(changedHeights);

// teacher version:

//map kan blive paralized? 
const satelitesAdjustedHeight = satelites.map((satelites) => {
    if (satelites.name == "MIR") {
        return satelites;
    }
    return {
        height: satelites.height -= 3000,
        name: satelites.name
    };
});

console.log(satelitesAdjustedHeight);

// reduceret udgave:
const satelitesAdjustedHeightTwo = satelites.map((satelites) => ({
    name: satelites.name,
    height: satelites.name === "MIR" ? satelites.height : satelites.height - 3000
}))

console.log(satelitesAdjustedHeightTwo);


const listOfReactions = ["thumbs down", "thumbs down", "thumbs down"];


// assignemnt: make a list that reacts as many times as above with thunbs up

const updatedReaction = listOfReactions.map((reaction) => "thumbs up");

console.log(listOfReactions);
