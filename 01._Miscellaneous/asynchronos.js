// JavaScript is single threaded, everything runs on the main-thread.


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything went well");
    }, 2000);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});