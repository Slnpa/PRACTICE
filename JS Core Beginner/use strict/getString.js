'use strict'
const getString = (str) => {
    const letters = ['a','e','y','u','o','i','у','е','ы','а','о','э','я','и','ю','ё'];
    for(let letter of str)
    {
        for (let i = 0; i < letters.length; i++) {
            if(letter==letters[i])
            {
                return true;
            }
        }
    }
    return false;
}

console.log(getString("vdsfdsfа"))