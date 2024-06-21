const increaseTenPerc = (array) =>{
    for (let i = 0; i < array.length; i++) {
        array[i]=array[i]*1.1;
    }
    return array;
}
console.log(increaseTenPerc([10,20,30,40,50]));