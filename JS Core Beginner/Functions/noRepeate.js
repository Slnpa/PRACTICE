const noRepeate = (str) => {
    for (let i = 0; i < str.length; i++) {
        if(str[i]!=str[i+1])
        {
            return str[i+1];
        }        
    }
}
console.log(noRepeate("dddfdd"));