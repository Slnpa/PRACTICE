const operation1 = ()=>{
    let res = 1;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Первая операция окончена с результатом: ", res);
            resolve(1);
        },1000)
    });
}
const operation2 = (res)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Вторая операция окончена с результатом: ", res+1);
            resolve(res+1);
        },1000)
    });
}
const operation3 = (res)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Третья операция окончена с результатом: ", res+1);
            resolve(res+1);
        },1000)
    });
}
const all = ()=>{
    operation1()
    .then(res=>operation2(res))
    .then(res=>operation3(res))
    .then(finalRes=>console.log("Финальный результат: ", finalRes));
}

all();