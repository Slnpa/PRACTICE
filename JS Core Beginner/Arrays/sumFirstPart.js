const sumFirstPart = (array) =>{
    let count = array.length;
    let res = 0;
    for (let i = 0; i < count/2;/*Округление в большую сторону*/ i++) {
        res= res+array[i];
    }
    return res;
}
console.log(sumFirstPart([1,2,3,4,5,4,5,7,123123]));