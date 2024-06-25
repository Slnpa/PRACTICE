const errorNum = (num)=>{
    try {
        if(!Number.isInteger(num))
        {
            throw new Error("Число не является целым");
        }
        else{
            return `Число целое`;
        }
    } catch (error) {
        return error.message;
    }
}
console.log(errorNum(1.2));