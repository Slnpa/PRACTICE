const twoNum = (num1,num2)=>{
    try {
        if(num2==0)
        {
            throw new Error("Второе число является нулем");
        }
    } catch (error) {
        return error.message;
    }
}
console.log(twoNum(1,0));