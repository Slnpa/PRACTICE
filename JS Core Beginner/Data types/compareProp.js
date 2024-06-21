const compareProp = (obj1,obj2) =>{
    let counterOfProp=0;//Количество эквивалентных значений свойств
    for(let key in obj1)
    {
        for(let key1 in obj2)
        {
            if(obj1[key]==obj2[key1])
            {
                counterOfProp++;
            }
        }
    }
    return counterOfProp;
}
console.log(compareProp({name:'Павел',age:'21',country:'Belarus'},{name:'Павел',age:'15',country:'Belarus'}))