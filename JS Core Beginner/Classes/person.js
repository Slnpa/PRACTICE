class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    info()
    {
        console.log(`Имя: ${this.name}\nВозраст: ${this.age}\nСтрана: ${this.country}`);
    }
}

const person1 = new Person("Павел","21","Беларусь");
person1.info();

const person2 = new Person("Роман","15","Кыргызстан");
person2.info();