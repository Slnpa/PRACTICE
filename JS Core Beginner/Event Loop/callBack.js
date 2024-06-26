const delayCallback = (callback)=> {
    setTimeout(() => {
        callback();
    }, 2000);
}

delayCallback(() => {
    console.log('Callback вызван через 2 секунды');
});