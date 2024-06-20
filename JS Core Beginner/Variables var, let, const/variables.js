const variables = () => {
    {
        var x = 1;
        let y = 1;
        const z = 1;
        console.log(x);
        console.log(y);
        console.log(z);
    }
    console.log(x);
    console.log(y);//ReferenceError: y is not defined
    console.log(z); //ReferenceError: z is not defined
}

variables(); //снаружи блока видна только переменная объявленная var

