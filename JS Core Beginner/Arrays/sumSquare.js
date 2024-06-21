const sumSquare = (array) => {
    let res = 0;
    for(let item of array)
    {
        res=res+item*item;
    }
    return res;
}
console.log(sumSquare([1,2,3,4,5,6]))