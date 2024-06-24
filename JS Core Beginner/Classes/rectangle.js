class Rectangle{
    constructor(width,lenght){
        this.width=width;
        this.lenght=lenght;
    }
    S(){
        console.log(`${this.lenght*this.width}`);
    }
    P(){
        console.log(`${this.lenght*2+this.width*2}`);
    }
}

const Rect = new Rectangle(5,6);
Rect.S();
Rect.P  ();