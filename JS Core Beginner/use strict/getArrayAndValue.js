'use strict'
const getArrayAndValue = (arr, val) => {
    for (let item of arr)
    {
        if(item == val)
        {
            return true;
        }
    }
    return false;
}

console.log(getArrayAndValue([1,2,3], 3));