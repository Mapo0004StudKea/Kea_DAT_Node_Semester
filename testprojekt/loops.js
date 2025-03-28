const myNumbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = myNumbers.map((myNumber) => myNumber * 2);
    // Bivirkning med for-loop
    for (let i = 0; i < myNumbers.length; i++) {
        myNumbers[i] *= 2;
      }
      console.log(myNumbers); // [2, 4, 6, 8, 10, 12] (Originalen ændret)
  
      // Uden bivirkning med map
      const doubledList = myNumbers.map((number) => number * 2);
      console.log(doubledList); // [2, 4, 6, 8, 10, 12] (Originalen forbliver uændret)