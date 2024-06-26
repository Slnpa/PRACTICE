function getRandomDelay() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(`Generated random number: ${randomNum}`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNum <= 5) {
                resolve(`Success! Number: ${randomNum}`);
            } else {
                reject(new Error(`Error! Number: ${randomNum}`));
            }
        }, randomNum * 1000); 
    });
}

getRandomDelay()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error.message);
    });
