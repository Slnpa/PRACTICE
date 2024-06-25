const typeError = (obj,prop)=>{
    try {
        return obj[prop];
    } catch (error) {
        if(error instanceof TypeError)
        {
            return `TypeError: Попытка доступа к свойству неопределенного объекта`;
        }
    }
}
let obj1;
console.log(typeError(obj1,"name"));