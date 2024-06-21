const sumFirstAndLastNum = (num) =>{
    let str = String(num);
    return Number(str[0])+Number(str[str.length-1]);
}
console.log(sumFirstAndLastNum(213123))